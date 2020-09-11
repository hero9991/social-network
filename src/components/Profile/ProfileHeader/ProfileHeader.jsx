import React from 'react';
import c from './ProfileHeader.module.css';

let ProfileHeader = (props) => {
  return (
    <div>
      <img className={c.img} src="https://cdn0.iconfinder.com/data/icons/rabbits_icons/512/rabbit_animal_pink.png" alt="" />
      <img className={c.img} src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sheep_mutton_animal_avatar-512.png" alt="" />
      <img className={c.img} src="https://cdn2.iconfinder.com/data/icons/icontober/64/Inkcontober_GIrrafe-512.png" alt="" />
      <img className={c.img} src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/bear_russian_animal_avatar-512.png" alt="" />
      <img className={c.img} src="https://cdn0.iconfinder.com/data/icons/rabbits_icons/512/rabbit_animal_pink_smile.png" alt="" />
    </div >
  )
}

export default ProfileHeader;