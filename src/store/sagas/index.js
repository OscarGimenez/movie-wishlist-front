import {
    takeEvery
} from 'redux-saga/effects';

import {
    setHomeMoviesSaga,
    addToWishlistSaga
} from './movies'
import {
    authStartSaga,
    logoutSaga,
    autoLoginSaga,
    checkAuthTimeoutSaga
} from './auth';

import * as actionTypes from '../actions/actionTypes';

export function* watchMovies() {
    yield takeEvery(actionTypes.INIT_HOME_MOVIES, setHomeMoviesSaga);
    yield takeEvery(actionTypes.ADD_TO_WISHLIST, addToWishlistSaga);
}

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_START, authStartSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_START_AUTO_LOGIN, autoLoginSaga);
}