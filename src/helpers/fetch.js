import { headers } from "./constant"


export const fetchSearch = async (searchQuery) => {
    try {
        let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
            searchQuery,
            {
                method: 'GET',
                headers,
            }
        )
        if (response.ok) {
            let result = await response.json()
            let returnValue = [result.data, 0];
            return returnValue;
        } else {
            console.log('error')
            return [null, 2];
        }
    } catch (err) {
        console.log(err)
        return [null, 2];
    }
}

export const fetchAlbum = async (albumId) => {
    try {
        const response = await fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`,

            {
                method: "GET",
                headers,
            }
        );
        if (response.ok) {
            const album = await response.json();
            return [album, 0]
        } else {
            return [{}, 2];
        }
    } catch (exception) {
        return [{}, 2];
    }
};

export const fetchArtist = async (artistName) => {
    if (artistName === undefined) {
        return [null, 1];
    }
    try {
        let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
            artistName,
            {
                method: 'GET',
                headers,
            }
        )
        if (response.ok) {
            let result = await response.json();
            return [result.data, 0];
        } else {
            console.log('error')
            return [null, 2];
        }
    } catch (err) {
        console.log(err)
        return [null, 2];
    }
};