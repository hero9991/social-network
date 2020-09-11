import { authAPI } from "../api/api";

const SET_USER = 'SET-USER';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUser = (id, email, login) => ({
    type: SET_USER,
    data: { id, email, login }
});

export const getAuthUser = () => {
    return (dispatch) => {
        authAPI.getAuthUser().then(data => {
            let {id, email, login} = data.data;
            dispatch(setAuthUser(id, email, login));
        });
    }
}

export default authReducer;