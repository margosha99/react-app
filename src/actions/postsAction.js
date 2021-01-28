export const startFetchPosts = () => {
    return {
        type: 'FETCH_POSTS_REQUEST',
    }
}

export const successFetchPosts = (data) => {
    return{
        type: "FETCH_POSTS_SUCCESS",
        payload: data
    }
}

export const failFetchPosts = (error) => {
    return {
        type: "FETCH_POSTS_ERROR",
        payload: error
    }
}
export const addPost = (postData) => {
    return {
        type: "ADD_POST",
        payload: postData
    }
}
export const fetchPosts = () => {
    return function (dispatch) {
        dispatch(startFetchPosts()) 
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => dispatch(successFetchPosts(json)) )
            .catch(error => dispatch(failFetchPosts(error)))
    }
}
export async function submitToServer(data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
           title: data.title,
           body: data.body,
           userId: data.userId ,
         }),
         headers: {
           'Content-type': 'application/json; charset=UTF-8',
         },
       })
       return response.json();
   }