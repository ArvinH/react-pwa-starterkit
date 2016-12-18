import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout';
import About from './components/About';
import Home from './components/Home';
// import {Provider} from 'react-redux'
// import _createStore from './redux/createStore'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export default () => (
    <MuiThemeProvider>
      <Router history={hashHistory}>
        <Route path="/" component={Layout} title="PWA">
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
        </Route>
      </Router>
    </MuiThemeProvider>
);
