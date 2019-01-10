import {
    takeEvery
} from 'redux-saga/effects';

import {
    setHomeMoviesSaga
} from './movies'
import * as actionTypes from '../actions/actionTypes';

export function* watchMovies() {
    yield takeEvery(actionTypes.INIT_HOME_MOVIES, setHomeMoviesSaga);
}