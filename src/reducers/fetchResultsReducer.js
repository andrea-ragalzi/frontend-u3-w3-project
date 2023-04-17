import { FETCH_SUCCESS, FETCH_FAIL } from '../actions/fetchResultsAction.js'

const initialState = {
    tracks: [],
    query: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                tracks: action.payload.tracks
            };
        case FETCH_FAIL:
            return {
                ...state,
                tracks: []
            };
        default:
            return state;
    }
};

export default searchReducer;