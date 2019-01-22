import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_WISHLIST:
            return ({
                ...state,
                loading: true
            })
        case actionTypes.SET_WISHLIST_MOVIES:
            return ({
                ...state,
                movies: action.movies,
                loading: false
            })
        case actionTypes.WISHLIST_REMOVE_MOVIE:
            return ({
                ...state,
                loading: true
            })
        case actionTypes.WISHLIST_REMOVE_MOVIE_ENDING:
            return ({
                ...state,
                loading: false
            })

        default:
            return state;
    }
}

export default reducer;