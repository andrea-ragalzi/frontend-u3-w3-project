export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const DELETE_FROM_FAVOURITES = 'DELETE_FROM_FAVOURITES';

export const addToFavouritesAction = (track) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: track
    }
}

export const deleteFromFavouritesAction = (track) => {
    return {
        type: DELETE_FROM_FAVOURITES,
        payload: track
    }
}