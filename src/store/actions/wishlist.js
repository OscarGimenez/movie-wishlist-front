import * as actionTypes from './actionTypes';

export const initWishlist = (username) => {
    return {
        type: actionTypes.INIT_WISHLIST,
        username: username
    }
}

export const setWishlistMovies = (movies) => {
    return {
        type: actionTypes.SET_WISHLIST_MOVIES,
        movies: movies
    }
}
