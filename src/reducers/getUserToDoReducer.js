import { getUserToDo } from "../actions/getUserToDoAction";

const initialState = [];

const getUserToDoReducer = (state = initialState, action ) => {
    switch(action.type){
        case "GET_USER_TODO":
            return action.payload
        default:
            return state
    }
}

export default getUserToDoReducer;