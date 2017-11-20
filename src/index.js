import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App.js';
import appReducer from './redux/reducers/appReducer.js';
import weatherReducer from './redux/reducers/weatherReducer.js';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    combineReducers({
        appReducer,
        weatherReducer
    }),
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
