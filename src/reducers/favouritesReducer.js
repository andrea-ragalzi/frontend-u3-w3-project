import { ADD_TO_FAVOURITES, DELETE_FROM_FAVOURITES } from
    "../actions/favouritesAction";

const addToFavourite = (values, valueToAdd) => {
    if (values.includes(valueToAdd)) {
        return [...values];
    }
    return [...values, valueToAdd];
}

const deleteFromFavourite = (values, valueToDelete) => {
    return values.filter(value => value !== valueToDelete);
}

const initialState = {
    favourites: []
};

export const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: addToFavourite(
                    state.favourites, action.payload)
            }
        case DELETE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: deleteFromFavourite(
                    state.favourites, action.payload)
            }
        default:
            return state;
    }
};