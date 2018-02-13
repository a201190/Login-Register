import React, { Component } from 'react';
import Approuter from './router';
import {BrowserRouter} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Approuter/>
      </BrowserRouter>
    );
  }
}

export default App;
