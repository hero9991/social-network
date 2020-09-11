import { searchMusicActionCreator, musicTextChangeActionCreator } from '../../Redux/music-reducer';
import Music from './Music';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        musicPage: state.musicPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        searchMusic: () => {dispatch(searchMusicActionCreator())},
        musicTextChange: (text) => {dispatch(musicTextChangeActionCreator(text))},
    }
}
const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)

export default MusicContainer;