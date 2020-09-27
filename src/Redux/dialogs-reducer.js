const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_CHANGE = 'MESSAGE-CHANGE';

let initialState = {
    dialogsData: [
        { id: 1, img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-9--512.png', name: 'Иван' },
        { id: 2, img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-6-512.png', name: 'Алексей' },
        { id: 3, img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/muslim_man_avatar-256.png', name: 'Саня' },
        { id: 4, img: 'https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/5-512.png', name: 'Егор' }
    ],
    messagesData: [
        { id: 1, message: 'привет, Егорка - давно не виделись' },
        { id: 2, message: 'привет, Леша, как дела' },
        { id: 3, message: 'Нормально вроде' },
    ],
    newMessage: '',
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, { message: state.newMessage }],
                newMessage: '',
            }
        case MESSAGE_CHANGE:
            return {
                ...state,
                newMessage: action.message,
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})
export const messageChangeActionCreator = (message) => ({
    type: MESSAGE_CHANGE,
    message: message,
})

export default dialogsReducer;