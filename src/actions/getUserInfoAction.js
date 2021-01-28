export const getUserInfo = (data) => {
    return {
        type: "GET_INFO",
        payload: data
    }
}
export const fetchUserInfo = (userId) => {
    return function (dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(json => dispatch(getUserInfo(json)))
    }
}