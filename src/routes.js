import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './Layout';
import About from './components/About';
import Home from './components/Home';


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout} title="PWA">
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>
)

if (module.hot) {
  module.hot.accept()
}