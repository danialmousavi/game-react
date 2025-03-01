import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//redux configuration
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/combineReducer';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);