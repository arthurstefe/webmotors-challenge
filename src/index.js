import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/home/Home';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
