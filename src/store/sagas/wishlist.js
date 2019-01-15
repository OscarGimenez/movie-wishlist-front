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
        let newMovies = []
        for (let movie in response.data) {
            newMovies.push(movie);
        }

        yield console.log("response.data", response.data);
        yield console.log("newMovies", newMovies);

        let myarray=[]

        Object.keys(response.data).forEach(function (prop) {
            // `prop` is the property name
            // `data[prop]` is the property value
            myarray.push(response.data[prop]);
        });
        console.log("myarray", myarray);

        yield put(actions.setWishlistMovies(myarray));
    } catch (err) {
        // TODO: Handle error
    }
}