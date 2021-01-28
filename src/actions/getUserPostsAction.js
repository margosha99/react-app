export const getUserPosts = (data) => {
    return {
        type: "GET_USER_POSTS",
        payload: data
    }
}
export const fetchUserPosts = (userId) => {
    return dispacth => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(data => data.json())
        .then(json => dispacth(getUserPosts(json)) )
    }
}