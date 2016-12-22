import React from 'react';
import {render} from 'react-dom';
// import {install} from 'offline-plugin/runtime';
import './style.css';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import reducers from './redux/reducers'

import Layout from './Layout';
import About from './components/About';
import Home from './components/Home';


const rootEl = document.getElementById('root');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout} title="PWA">
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
      </Route>
    </Router>
  </Provider>,
  rootEl
);

// install();

if (module.hot) {
  const replaceRootReducer = () => {
    const nextRootReducer = require('./redux/reducers').default
    store.replaceReducer(nextRootReducer);
  }

  const reducerModules = [
    './reducers'
  ]

  reducerModules.forEach(path => module.hot.accept(path, replaceRootReducer))
}
