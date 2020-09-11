import React from 'react';
import c from './ProfileInfo.module.css';
import Preloader from '../../../Preloader/Preloader';
import avatar from '../../../assets/img/avatar.jpg'

let ProfileInfo = (props) => {
  
  if (props.profile && !props.isPreloaded){
  return (
    <div className={c.info}>
      {props.profile.photos.large ? <img src={props.profile.photos.large } alt=""/> : <img src={avatar} alt=""/>}
      <div className={c.text}>
        <div className={c.full_name}>{props.profile.fullName}</div>
        <div className={c.about}>{props.profile.aboutMe}</div>
      </div>
      <div className={c.contacts}>
        <a href={props.profile.contacts.vk} className={c.vk}>{props.profile.contacts.vk}</a>
      </div>
    </div >
  )}
  return <Preloader/>
}

export default ProfileInfo;