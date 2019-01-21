import * as actionTypes from './actionTypes';

export const setHomeMovies = (payload) => {
    return {
        type: actionTypes.SET_HOME_MOVIES,
        response: payload
    }
}

export const initHomeMovies = () => {
    return {
        type: actionTypes.INIT_HOME_MOVIES
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