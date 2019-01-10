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

