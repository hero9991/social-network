const SEARCH_MUSIC = 'SEARCH-MUSIC';
const MUSIC_TEXT_CHANGE = 'MUSIC-TEXT-CHANGE';

let initialState = {
    musicData: [
      { id: 1, name: 'song', },
      { id: 2, name: 'song1', },
      { id: 3, name: 'song2', },
    ],
    newMusic: 'f',
  }

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_MUSIC:
            return{
                ...state,
                musicData: [...state.musicData, { id: 4, name: state.newMusic }],
                newMusic: '',
            }
        case MUSIC_TEXT_CHANGE:
            return{
                ...state,
                newMusic: action.text,
            }
        default:
            return state;
    }
}

export const searchMusicActionCreator = () => ({
    type: SEARCH_MUSIC,
});
export const musicTextChangeActionCreator = (text) => ({
    type: MUSIC_TEXT_CHANGE,
    text: text,
});


export default musicReducer;