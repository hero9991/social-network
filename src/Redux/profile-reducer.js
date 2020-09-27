import { userAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const TEXT_CHANGE = 'TEXT-CHANGE';
const SET_PROFILE = 'SET-PROFILE';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const SET_STATUS = 'SET-STATUS'

let initialState = {
    postsData: [
        { id: 1, img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-9--512.png', text: 'ay' },
        { id: 2, img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-6-512.png', text: 'ya' },
        { id: 3, img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/muslim_man_avatar-256.png', text: 'help' },
        { id: 4, img: 'https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/5-512.png', text: 'please' },
    ],
    newPostText: '',
    profile: null,
    isPreloaded: false,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, { id: 5, img: "https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-512.png", text: state.newPostText }],
                newPostText: '',
            }
        case TEXT_CHANGE:
            return {
                ...state,
                newPostText: action.text,
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isPreloaded: action.isPreoladed
            }
        case SET_STATUS:
            return{
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})
export const textChangeActionCreator = (text) => ({
    type: TEXT_CHANGE,
    text,
})
export const setProfile = (profile) => ({
    type: SET_PROFILE,
    profile,
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})
export const togglePreloader = (isPreoladed) => ({
    type: TOGGLE_PRELOADER,
    isPreoladed,
});


export const getUser = (user) => {
    return (dispatch) => {
        dispatch(togglePreloader(true));
        userAPI.getUser(user)
            .then(data => {
                dispatch(togglePreloader(false));
                dispatch(setProfile(data));
            });
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id)
            .then(data => {
                dispatch(setStatus(data))
            });
    }
}

export const setUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status)
            .then(data => {
                debugger
                if (data.resultCode === 0) {
                    dispatch(setStatus(status));
                } 
            })
    }
}


export default profileReducer;


