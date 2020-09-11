import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import musicReducer from "./music-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    musicPage: musicReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));


export default store;