const initialState = [];

const getUserAlbumsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USER_ALBUMS":
            return action.payload
        default:
            return state
    }
}

export default getUserAlbumsReducer;
