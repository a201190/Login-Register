import React from 'react';
import ReactDOM from 'react-dom';
import Client from './client';
import 'bootstrap/dist/css/bootstrap.css';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><Client/></Provider>, document.getElementById('root'));
registerServiceWorker();
