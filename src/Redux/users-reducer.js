import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_PRELOADER = 'TOGGLE-PRELOADER';
const TOGGLE_DISABLED = 'TOGGLE-DISABLED';


let initialState = {
    users: [],
    pageCount: 100,
    totalCount: 0,
    page: 1,
    isPreloaded: false,
    disabledUsers: [],
}

//reducers
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((a) => {
                    return a.id === action.userId ? { ...a, followed: true } : a
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((a) => {
                    return a.id === action.userId ? { ...a, followed: false } : a
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page,
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount,
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isPreloaded: action.isPreoladed
            }
        case TOGGLE_DISABLED:
            return {
                ...state,
                disabledUsers: action.isDisabled
                    ? [...state.disabledUsers, action.id]
                    : state.disabledUsers.filter(id => id !== action.id)

            }
        default:
            return state;
    }
}


//actionCreators
export const follow = (userId) => ({
    type: FOLLOW,
    userId,
});
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId,
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users,
});
export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page,
});
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount,
});
export const togglePreloader = (isPreoladed) => ({
    type: TOGGLE_PRELOADER,
    isPreoladed,
});
export const toggleDisabled = (isDisabled, id) => ({
    type: TOGGLE_DISABLED,
    isDisabled,
    id,
});


//thunks
export const getUsers = (page, pageCount) => {
    return (dispatch) => {
        dispatch(togglePreloader(true));
        userAPI.getUsers(page, pageCount).then(data => {
            dispatch(togglePreloader(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    }
}

export const followUser = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabled(true, id));
        userAPI.followUser(id).then(data => {
            dispatch(toggleDisabled(false, id))
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
        })
    }
}

export const unfollowUser = (id) => {
    return (dispatch) => {
        dispatch(toggleDisabled(true, id));
        userAPI.unfollowUser(id).then(data => {
            dispatch(toggleDisabled(false, id))
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
        })
    }
}


export default usersReducer;