import React from 'react';
import c from './Song.module.css';

let Song = (props) => {
    return (
        <div className = {c.main}>
            {props.name}
        </div>
    )
}



export default Song;