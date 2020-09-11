import React from 'react';
import c from './Music.module.css';
import Song from './Song/Song';


let Music = (props) => {
    let musicElements = props.musicPage.musicData.map((a) => <Song id={a.id} name={a.name} key={a.id}/>)
    
    let searchMusic = () => {
        props.searchMusic()
    }
    let musicTextChange = (e) => {
        let text = e.target.value;
        props.musicTextChange(text)
    }

    return (
        <div className={c.main}>
           {musicElements}
           <textarea value = {props.musicPage.newMusic} onChange = {musicTextChange}></textarea>
           <button onClick = {searchMusic}>search</button>
        </div>
    );
}

export default Music;