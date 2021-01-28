export const getUserAlbums = (data) => {
    return {
        type: "GET_USER_ALBUMS",
        payload: data
    }
}

export const fetchUsersAlbums = (userId) => {
    return dispacth => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then(data => data.json())
        .then(json => dispacth(getUserAlbums(json)))
    }
}