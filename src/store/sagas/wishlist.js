import {
    put
} from 'redux-saga/effects';
import {
    delay
} from 'redux-saga';

import axios from 'axios';

import * as actions from '../actions/index';

export function* setWishlistMoviesSaga(action) {
    try {
        yield delay(1000);
        const response = yield axios
            .get(`https://movie-wishlist-backend.appspot.com/api/user-movies/1.0/list/${action.username}`);
        let movies = [];
        Object.keys(response.data).forEach(function (prop) {
            movies.push(response.data[prop].movie);
        });

        yield put(actions.setWishlistMovies(movies));
    } catch (err) {
        // TODO: Handle error
        console.log(err);
    }
}

export function* removeMovieFromWishlistSaga(action) {
    try {
        const data = {
            username: action.username,
            movie: action.movie
        };
        yield delay(1000);
        // TODO: REMOVE MOVIE
        const response = yield axios
            .post('https://movie-wishlist-backend.appspot.com/api/user-movies/1.0/remove', data);
        console.log(response);
        yield put(actions.removeMovieFromWishlistEnding(true));
    } catch (err) {
        // TODO: Handle error
        console.log(err);
    }
}