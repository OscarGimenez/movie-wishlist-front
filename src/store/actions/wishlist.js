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

export const removeMovieFromWishlist = (username, movies) => {
    return {
        type: actionTypes.WISHLIST_REMOVE_MOVIE,
        username: username,
        movies: movies
    }
}

export const removeMovieFromWishlistEnding = () => {
    return {
        type: actionTypes.WISHLIST_REMOVE_MOVIE_ENDING,
    }
}