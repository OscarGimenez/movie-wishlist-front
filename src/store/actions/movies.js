import * as actionTypes from './actionTypes';

export const setHomeMovies = (payload) => {
    return {
        type: actionTypes.SET_HOME_MOVIES,
        response: payload
    }
}

export const initHomeMovies = (payload) => {
    return {
        type: actionTypes.INIT_HOME_MOVIES,
        payload: payload
    }
}

export const addToWishlist = (username, movie ) => {
    return {
        type: actionTypes.ADD_TO_WISHLIST,
        username: username,
        movie: movie
    }
}
export const addedToWishlist = (movie) => {
    return {
        type: actionTypes.ADDED_TO_WISHLIST,
        movie: movie
    }
}