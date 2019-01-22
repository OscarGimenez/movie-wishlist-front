import {
    takeEvery
} from 'redux-saga/effects';

import {
    authStartSaga,
    logoutSaga,
    autoLoginSaga,
    checkAuthTimeoutSaga
} from './auth';
import {
    setHomeMoviesSaga,
    addToWishlistSaga
} from './movies'
import {
    setWishlistMoviesSaga,
    removeMovieFromWishlistSaga
} from './wishlist'


import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_START, authStartSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_START_AUTO_LOGIN, autoLoginSaga);
}

export function* watchMovies() {
    yield takeEvery(actionTypes.INIT_HOME_MOVIES, setHomeMoviesSaga);
    yield takeEvery(actionTypes.ADD_TO_WISHLIST, addToWishlistSaga);
}

export function* watchWishlist() {
    yield takeEvery(actionTypes.INIT_WISHLIST, setWishlistMoviesSaga);
    yield takeEvery(actionTypes.WISHLIST_REMOVE_MOVIE, removeMovieFromWishlistSaga);
}