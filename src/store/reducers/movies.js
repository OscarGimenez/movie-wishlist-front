import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOME_MOVIES:
            return ({
                movies: action.response
            })
        default:
            return state;
    }
}

export default reducer;