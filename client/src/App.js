import React, { Component } from 'react';
import Approuter from './router';
import {Router} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Approuter/>
      </Router>
    );
  }
}

export default App;
