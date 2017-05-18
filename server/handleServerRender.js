const createStore = require('redux').createStore;
const Provider = require('redux').Provider;
const appReducers = require('../src/reducers');
const HomePageContainer = require('../src/containers/HomePageContainer');
const renderToString = require('react-dom/server').renderToString;

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
  // Create a new Redux store instance
  const store = createStore(appReducers);

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <HomePageContainer />
    </Provider>
  );

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}

module.exports = { handleRender, renderFullPage };
