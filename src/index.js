import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import { install } from 'offline-plugin/runtime';
import App from './App';
import './style.css';

(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./youcard-service-worker.js');
  }
})();

const rootEl = document.getElementById('root');
render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      rootEl
    );
  });
}

install();
