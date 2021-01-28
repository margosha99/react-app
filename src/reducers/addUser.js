const initialState = {
    loading: false,
    users: [],
    error: null
}

const addUserReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_USERS_SUCCESS":
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case "FETCH_USERS_ERROR":
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default addUserReducer;