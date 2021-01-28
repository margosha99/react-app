const initialState = {
    user: []
}

const getUserInfoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_INFO":
            return {
                ...state,
                user: [action.payload]
            }
        default:
            return state
    }
}

export default getUserInfoReducer;