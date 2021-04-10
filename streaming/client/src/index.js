import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

// CSS
import './index.css';

import App from './components/App';
import reducers from './reducers';

// applyMiddleware compose and redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Redux store
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

// render with store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.querySelector('#root')
);
