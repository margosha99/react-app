export const startFetchUsers = () => {
    return {
        type: "FETCH_USERS_REQUEST"
    }
}

export const successFetchUsers = (data) => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: data
    }
}

export const failFetchUsers = (error) => {
    return {
        type: "FETCH_USERS_ERROR",
        payload: error
    }
}

export const fetchUsers = () => {
    return function (dispatch){
        dispatch(startFetchUsers())
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => dispatch(successFetchUsers(json)) )
        .catch(error => dispatch(failFetchUsers(error)))
    }
}