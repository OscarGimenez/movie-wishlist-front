import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: null,
    loading: false,
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
        default:
            return state;
    }
}

export default reducer;