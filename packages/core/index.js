/* eslint-disable no-console */
const Bundler = require('parcel-bundler');
const { App } = require('@tinyhttp/app');
const { logger } = require('@tinyhttp/logger');
const { readdirSync, readFileSync } = require('fs');

// UI SUBAPP
const uiApp = new App();

const file = 'index.html';
const opts = { production: process.env.NODE_ENV === 'production', publicUrl: '/ui/' };
const bundlerMiddleware = new Bundler(file, opts);

console.log('running app on http://localhost:3000');

uiApp
  .get('/app.*.js', (_req, res) => {
    console.log('requested app.js');
    // basically this just makes it so that parcel actually can access its files
    // good grief it's a gross way of doing it though.
    const jsFile = readdirSync(`${process.cwd()}/dist/`).filter((fn) => fn.endsWith('.js') && fn.startsWith('app.'))[0];
    const jsContents = readFileSync(`${process.cwd()}/dist/${jsFile}`);
    res.set('Content-Type', 'text/javascript').send(jsContents.toString());
  })
  .get('/app.*.js.map', (_req, res) => {
    console.log('requested app.js.map');
    const jsFile = readdirSync(`${process.cwd()}/dist/`).filter((fn) => fn.endsWith('.js.map') && fn.startsWith('app.'))[0];
    const jsContents = readFileSync(`${process.cwd()}/dist/${jsFile}`);
    res.set('Content-Type', 'text/javascript').send(jsContents.toString());
  })
  .use(bundlerMiddleware.middleware());

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
  .use('/ui', uiApp)
  .use('/sse', sseApp)
  .get('/', (_, res) => {
    res.send('huh');
  })
  .listen(3000);
