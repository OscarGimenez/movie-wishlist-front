import {
    put
} from 'redux-saga/effects';
import {
    delay
} from 'redux-saga';

import axios from 'axios';

import * as actions from '../actions/index';

export function* setHomeMoviesSaga() {
    try {
        const response = yield axios
            .get('https://movie-wishlist-backend.appspot.com/api/movies/1.0/list/all');
        yield put(actions.setHomeMovies(response.data));
    } catch (err) {
        // TODO: Handle error
          console.log(err);
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
        .post('https://movie-wishlist-backend.appspot.com/api/user-movies/1.0/add', data);
        yield put(actions.addedToWishlist(action.movie));
    } catch (err) {
        // TODO: Handle error
          console.log(err);
    }
}