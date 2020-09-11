import React from 'react';
import c from './NavBar.module.css';
import { NavLink } from 'react-router-dom';


let NavBar = (props) => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink className={c.link} to="/Profile">Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={c.link} to="/Dialogs">Dialogs</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={c.link} to="/News">News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={c.link} to="/Music">Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={c.link} to="/Settings">Settings</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={c.link} to="/Users">Users</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;