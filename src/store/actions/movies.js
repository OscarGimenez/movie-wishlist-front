import * as actionTypes from './actionTypes';

export const setHomeMovies = () => {
    return {
        type: actionTypes.INIT_HOME_MOVIES
    }
}

export const initHomeMovies = (payload) => {
    return {
        type: actionTypes.SET_HOME_MOVIES,
        payload: payload
    }
}

