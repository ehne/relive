import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Link, Route, Switch, Router,
} from 'wouter';

const App = ({ comp }) => {
  const [listening, setListening] = useState(false);
  const [currentlyPlayingAnims, setCurrentlyPlayingAnims] = useState([]);

  useEffect(() => {
    if (!listening) {
      const events = new EventSource('http://localhost:3000/sse/events');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        // console.log(parsedData);
        setCurrentlyPlayingAnims(parsedData);
      };

      setListening(true);
    }
  }, [listening, currentlyPlayingAnims]);

  return (
    <Router base="/ui">
      <Switch>
        <Route path="/viewer">
          viewer
          {JSON.stringify(currentlyPlayingAnims)}
        </Route>
        <Route path="/remote">remote</Route>
        <Route>
          <Link href="/viewer">Viewer</Link>
          <Link href="/remote">Remote</Link>
          {comp}
        </Route>
      </Switch>
    </Router>
  );
};

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
