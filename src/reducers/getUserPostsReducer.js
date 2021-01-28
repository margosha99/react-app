const initialState = []

const getUserPostsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USER_POSTS":
            return action.payload
        default:
            return state
    }
}
export default getUserPostsReducer;