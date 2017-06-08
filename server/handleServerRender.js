import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../src/store';
import HomePageContainer from '../src/containers/HomePageContainer';

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Universal PWA</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}

function handleRender(req, res) {
  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <MuiThemeProvider>
        <HomePageContainer />
      </MuiThemeProvider>
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}

module.exports = { handleRender, renderFullPage };
