import React from 'react';
import c from './Post.module.css';



let Post = (props) => {
  return (
    <div className={c.post}>
      <div className={c.item}>
        <div className={c.ava}><img src={props.ava} alt="" /></div>
        <div className={c.text}>{props.text}</div>
      </div>
      <span>like</span>
    </div>
  )
}

export default Post;