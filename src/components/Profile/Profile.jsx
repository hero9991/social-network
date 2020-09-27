import React from 'react';
import c from './Profile.module.css';
import ProfileHeader from './ProfileHeader/ProfileHeader'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


let Profile = (props) => {

  return (
    <div className={c.main}>
      <ProfileHeader />
      <ProfileInfo profile={props.profile} status={props.status}
        isPreloaded={props.isPreloaded} setUserStatus={props.setUserStatus} 
        userId={props.userId} myId={props.myId}/>
      <MyPostsContainer />
    </div >
  );
}

export default Profile;