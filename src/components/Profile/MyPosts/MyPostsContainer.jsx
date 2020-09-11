import { addPostActionCreator, textChangeActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => { dispatch(addPostActionCreator()) },
    textChange: (text) => { dispatch(textChangeActionCreator(text)) }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;