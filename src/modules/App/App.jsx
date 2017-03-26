/* eslint-disable global-require */
import React from 'react';

import TextField from '../TextField/TextField';
import Keyboard from '../Keyboard/Keyboard';

let DevTools = () => <span />;

if (process.env.NODE_ENV === 'development') {
  DevTools = require('./DevTools').default;
}

const App = () => (
  <div className="app-root">
    <DevTools />
    <a href="/"><div className="title">Alphabeat</div></a>
    <TextField />
    <Keyboard />
  </div>
);

export default App;
