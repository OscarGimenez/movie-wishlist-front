import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import moviesReducer from './store/reducers/movies';
import authReducer from './store/reducers/auth';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watchAuth, watchMovies } from './store/sagas/index';

const reducer = combineReducers({
    movies: moviesReducer,
    auth: authReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchMovies);

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
