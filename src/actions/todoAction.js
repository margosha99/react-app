export const startFetchTodos = () => {
    return{
        type: "FETCH_TODOS_REQUEST"
    }
}
export const successFetchTodos = (data) => {
    return {
        type: "FETCH_TODOS_SUCCESS",
        payload: data
    }
}
export const failFetchTodods = (error) => {
    return {
        type: "FETCH_TODOS_ERROR",
        payload: error
    }
}
export const fetchTodos = () => {
    return function (dispatch) {  
        dispatch(startFetchTodos())
        return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => dispatch(successFetchTodos(json)) )
        .catch(error => dispatch(failFetchTodods(error)))
    }
}