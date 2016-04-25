import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import App from './components/App';
import thunk from "redux-thunk";
import {getRepositories} from './action_creators';

require('./style.css');

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);

store.dispatch(getRepositories());
