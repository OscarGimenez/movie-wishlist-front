import {
    put
} from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* setHomeMoviesSaga(action) {
    try {
        const response = yield axios
            .get('localhost:3000/movie-wishlist/movies/1.0/list/all');
        yield put(actions.setHomeMovies(response.data));
    } catch (err) {
        // TODO: Handle error
    }
}