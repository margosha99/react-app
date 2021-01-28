const initialState = {
    loading: false,
    posts: [],
    error: null
}

const addPostReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_POSTS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_POSTS_SUCCESS":
            return {
                loading: false, 
                posts: action.payload,
                error: '' 
            }
        case "FETCH_POSTS_ERROR":
            return { 
                loading: false,
                posts: [],
                error: action.payload 
            }
        case "ADD_POST":
            return{
                loading: false,
                posts:[...state.posts, action.payload],
                error: ''
        }
        default:
            return state;
    }
}

export default addPostReducer;