import {
    takeEvery
} from 'redux-saga/effects';

import {
    setHomeMoviesSaga
} from './movies'
import {
    authStartSaga,
    logoutSaga,
    checkAuthTimeoutSaga
} from './auth';

import * as actionTypes from '../actions/actionTypes';

export function* watchMovies() {
    yield takeEvery(actionTypes.INIT_HOME_MOVIES, setHomeMoviesSaga);
}

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_START, authStartSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
}