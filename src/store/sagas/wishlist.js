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
            .get(`https://movie-wishlist-backend.appspot.com/user-movies/1.0/list/${action.username}`);
        yield console.log(response.data);
        let newMovies = []
        for (let movie in response.data) {
            newMovies.push(movie);
        }
        yield console.log("newMovies", newMovies);

        let myarray = []

        Object.keys(response.data).forEach(function (prop) {
            myarray.push(response.data[prop].movie);
        });

        yield put(actions.setWishlistMovies(myarray));
    } catch (err) {
        // TODO: Handle error
    }
}