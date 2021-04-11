/* eslint-disable no-console */
const Bundler = require('parcel-bundler');
const { App } = require('@tinyhttp/app');
const { logger } = require('@tinyhttp/logger');
const { readdirSync, readFileSync } = require('fs');

console.log('running app on http://localhost:3000');

const generateReactApp = (app, path) => {
  const bundler = new Bundler(`${path}.html`, { production: process.env.NODE_ENV === 'production', publicUrl: `/ui/${path}` });

  const jsPassThroughHandler = (filePrefix, fileSuffix) => ((_req, res) => {
    // basically this just makes it so that parcel actually can access its files
    // good grief it's a gross way of doing it though.
    const jsFile = readdirSync(`${process.cwd()}/dist/`).filter((fn) => fn.endsWith(fileSuffix) && fn.startsWith(filePrefix))[0];
    const jsContents = readFileSync(`${process.cwd()}/dist/${jsFile}`);
    res.set('Content-Type', 'text/javascript').send(jsContents.toString());
  });

  app
    .get('/app.*.js', jsPassThroughHandler('app.', '.js'))
    .get('/app.*.js.map', jsPassThroughHandler('app.', '.js.map'))
    .use(bundler.middleware());
};

// Remote SUBAPP
const remoteApp = new App();
generateReactApp(remoteApp, 'remote');

// Viewer SUBAPP
const viewerApp = new App();
generateReactApp(viewerApp, 'viewer');

// SERVER SIDE EVENTS STUFF
// (sockets are hard in the system i have set up lol)
const sseApp = new App();

const activeAnims = [];

// toggles an element in and out of an array
function toggle(collection, item) {
  const idx = collection.indexOf(item);
  if (idx !== -1) {
    collection.splice(idx, 1);
  } else {
    collection.push(item);
  }
}

let clients = [];

function sendEventsToAll(newData) {
  clients.forEach((client) => client.res.write(`data: ${JSON.stringify(newData)}\n\n`));
}

sseApp
  .get('/events', (_req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    });

    const clientId = Date.now();

    const newClient = {
      id: clientId,
      res,
    };

    clients.push(newClient);

    res.on('close', () => {
      console.log(`${clientId} Connection closed`);
      clients = clients.filter((client) => client.id !== clientId);
    });
  })
  .post('/toggle/:anim', (_req, res) => {
    const animationID = _req.params.anim;
    toggle(activeAnims, animationID);
    sendEventsToAll(activeAnims);
    res.status(200).end();
    // res.send(`activeAnims: ${activeAnims}`);
  });

// COMBINER
const mainApp = new App();
mainApp
  .use(logger())
  .use('/ui/remote', remoteApp)
  .use('/ui/viewer', viewerApp)
  .use('/sse', sseApp)
  .get('/', (_, res) => {
    res.send('<a href="/ui/viewer">viewer</a> <a href="/ui/remote">remote</a>');
  })
  .listen(3000);
