export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';
export const QUERY_VALUE = 'QUERY_VALUE';

export const fetchSuccessAction = (tracks) => ({
    type: FETCH_SUCCESS,
    payload: {
        tracks: tracks
    }
});

export const fetchFailAction = () => ({
    type: FETCH_FAIL,
    payload: {
        tracks: []
    }
});

export const fetchSearchThunk = (query) => {
    return async (dispatch) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
            );
            if (response.ok) {
                const data = await response.json();
                const tracks = data.data;
                dispatch(fetchSuccessAction(tracks));
                console.log(tracks);
            }
            else {
                dispatch(fetchFailAction());
            }
        } catch (error) {
            dispatch(fetchFailAction());
        }
    };
};
