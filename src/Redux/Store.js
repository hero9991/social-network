import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import musicReducer from './music-reducer';


let store = {
  _state: {
    // Profile
    profilePage: {
      postsData: [
        { id: 1, img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-9--512.png', text: 'ay' },
        { id: 2, img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-6-512.png', text: 'ya' },
        { id: 3, img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/muslim_man_avatar-256.png', text: 'help' },
        { id: 4, img: 'https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/5-512.png', text: 'please' },
      ],
      newPostText: '',
    },
    // Dialogs
    dialogsPage: {
      dialogsData: [
        { id: 1, img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-9--512.png', name: 'Иван' },
        { id: 2, img: 'https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Man-6-512.png', name: 'Алексей' },
        { id: 3, img: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/muslim_man_avatar-256.png', name: 'Саня' },
        { id: 4, img: 'https://cdn4.iconfinder.com/data/icons/avatar-vol-1-3/512/5-512.png', name: 'Егор' }
      ],
      messagesData: [
        { message: 'привет, Егорка - давно не виделись' },
        { message: 'привет, Леша, как дела' },
        { message: 'Нормально вроде' },
      ],
      newMessage: '',
    },
    //Music
    musicPage: {
      musicDATA: [
        { id: 1, name: 'song', },
        { id: 2, name: 'song1', },
        { id: 3, name: 'song2', },
      ],
      newMusic: 'f',
    },
  },
  callSubscriber() { },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this.getState().profilePage, action);
    dialogsReducer(this.getState().dialogsPage, action);
    musicReducer(this.getState().musicPage, action);
    this.callSubscriber();
  },
}

export default store;