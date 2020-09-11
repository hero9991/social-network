import React from 'react';
import c from '../Profile.module.css';
import Post from './Post/Post';


let newPostElement = React.createRef();

let MyPosts = (props) => {

  let postElements = props.profilePage.postsData.map(a => <Post ava={a.img} text={a.text} key={a.id} />)

  let addPost = () => {
    props.addPost();
  }
  let textChange = () => {
    let text = newPostElement.current.value
    props.textChange(text)
  }

  return (
    <div className={c.myPosts}>
      <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={textChange} ></textarea>
      <button onClick={addPost}>add post</button>
      <div className={c.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;