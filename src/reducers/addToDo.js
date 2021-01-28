const initialState = {
    loading: false,
    todos: [],
    error: null
}

const addToDoReducer = (state = initialState, action ) =>{
    switch(action.type){
        case "FETCH_TODOS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_TODOS_SUCCESS":
            return {
                loading: false,
                todos: action.payload,
                error: ''
            }
        case "FETCH_TODOS_ERROR":
            return{
                loading: false,
                todos: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default addToDoReducer;