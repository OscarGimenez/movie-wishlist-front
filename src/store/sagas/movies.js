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

        const response = yield axios
            .get('https://movie-wishlist-backend.appspot.com/movies/1.0/list/all');
            // .get('http://localhost:3000/movies/1.0/list/all');
        yield put(actions.setHomeMovies(response.data));
    } catch (err) {
        // TODO: Handle error
    }
}

export function* addToWishlistSaga(action) {
    console.log("Saga addToWishlistSaga: INSERTING...");
    yield delay(2000);
    console.log("Saga addToWishlistSaga: Done...");
    console.log(action.username);
    console.log(action.movieCode);
    const data = {
        username: action.username,
        movieCode: action.movieCode
    };
    try {
        yield axios
        .post('https://movie-wishlist-backend.appspot.com/user-movies/1.0/add', data);
        // .post('localhost:3000/user-movies/1.0/add', data);
        yield put(actions.addedToWishlist());
    } catch (err) {
        // TODO: Handle error
    }
}