import {
    put
} from 'redux-saga/effects';
import {
    delay
} from 'redux-saga';

import axios from 'axios';

import * as actions from '../actions/index';

export function* setHomeMoviesSaga(action) {
    try {
        yield console.log('Trying to access backend');
        const response = yield axios
            .get('https://movie-wishlist-backend.appspot.com/movies/1.0/list/all');
            // .get('http://localhost:3000/movies/1.0/list/all');
        yield put(actions.setHomeMovies(response.data));
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        // TODO: Handle error
    }
}

export function* addToWishlistSaga(action) {
    yield delay(2000); // This is to simulate some delay on the Database
    const data = {
        username: action.username,
        movie: action.movie
    };
    try {
        yield axios
        .post('https://movie-wishlist-backend.appspot.com/user-movies/1.0/add', data);
        // .post('localhost:3000/user-movies/1.0/add', data);
        yield put(actions.addedToWishlist(action.movie));
    } catch (err) {
        // TODO: Handle error
    }
}