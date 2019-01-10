import * as actionTypes from '../actions/actionTypes';

const initialState = {
    movies: null,
}

// FIXME: Hacerlo
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_HOME_MOVIES:
            return ({
                movies: null
            })
        default:
            return state;
    }
}

export default reducer;