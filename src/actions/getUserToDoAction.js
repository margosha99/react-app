export const getUserToDo = (data) => {
    return {
        type:  "GET_USER_TODO",
        payload: data
    }
}
export const fetchUserToDo = (userId) => {
    return dispacth => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(data => data.json())
        .then(json => dispacth(getUserToDo(json)) )
    }
}