import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import addPostReducer from './addPost';
import addToDoReducer from './addToDo';
import addUserReducer from './addUser';
import getUserInfoReducer from './getUserInfoReducer';
import  getUserPostsReducer  from "./getUserPostsReducer";
import getUserAlbumsReducer from './getUserAlbumsReducer';
import getUserToDoReducer from './getUserToDoReducer'


const allReducers = combineReducers({
    postList: addPostReducer,
    toDoList: addToDoReducer,
    userList: addUserReducer,
    form: formReducer,
    userInfo: getUserInfoReducer,
    userAlbums: getUserAlbumsReducer,
    userPosts: getUserPostsReducer,
    userToDo: getUserToDoReducer
})

export default allReducers;