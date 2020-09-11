import React from 'react';
import c from './DialogItems.module.css'
import { NavLink } from 'react-router-dom';


let DialogItems = (props) => {
    return <div className={c.dialog}>
        <img src={props.img} alt="" />
        <NavLink className={c.item} to={'/Dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}




export default DialogItems;