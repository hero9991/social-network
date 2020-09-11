import React from 'react';
import c from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let Profile = (props) => {
  
  return (
    <div className={c.main}>
      <ProfileHeader />
      <ProfileInfo profile={props.profile} isPreloaded={props.isPreloaded}/>
      <MyPostsContainer />
    </div >
  );
}

export default Profile;