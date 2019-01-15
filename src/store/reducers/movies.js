import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_HOME_MOVIES:
            return ({
                ...state,
                loading: true
            })
        case actionTypes.SET_HOME_MOVIES:
            return ({
                ...state,
                movies: action.response,
                loading: false
            })
        case actionTypes.ADD_TO_WISHLIST:
            const updatedMoviesWithLoader = [...state.movies];            
            const movieLoading = updatedMoviesWithLoader.filter((result) => result.code === action.movieCode);
            movieLoading[0].loading = true;
            return ({
                ...state,
                movies: updatedMoviesWithLoader
            })
        case actionTypes.ADDED_TO_WISHLIST:
        const updatedMoviesWithoutLoader = [...state.movies];            
        const movieUpdated = updatedMoviesWithoutLoader.filter((result) => result.code === action.movieCode);
        movieUpdated[0].loading = false;
        movieUpdated[0].isInWishlist = true;
        return ({
            ...state,
            movies: updatedMoviesWithoutLoader
        })
        default:
            return state;
    }
}

export default reducer;