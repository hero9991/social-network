import React from 'react';
import c from './Header.module.css';
import { NavLink } from 'react-router-dom';

let Header = (props) => {
    return (
        <header className={c.header}>
            <img className={c.icon} src="https://cdn4.iconfinder.com/data/icons/anti-christmas/100/04_reindeer-512.png" alt="" />
            {props.isAuth ?
                <div className={c.contacts}>
                    contacts
                    <div>{props.users}</div>
                </div> :
                <div className={c.contacts}>
                    <NavLink to="/login">login</NavLink>
                </div>

            }
        </header>
    );
}

export default Header;