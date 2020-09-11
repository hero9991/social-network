import React from 'react';
import c from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Message from './Message/Message';


let Dialogs = (props) => {
    
    let dialogElements = props.dialogsPage.dialogsData.map((a) => 
                         <DialogItems img={a.img} name={a.name} id={a.id} key={a.id}/>)
    let massageElements = props.dialogsPage.messagesData.map((a) => 
                         <Message message={a.message} key={a.id}/>)

    let addMessage = () => {
        props.addMessage()
    }
    let messageChange = (e) => {
        props.messageChange(e.target.value)
    }

    return (
        <div className={c.dialogMain}>
            <div className={c.dialogItems}>
                {dialogElements}
            </div>
            <div className={c.messages}>
                {massageElements}
            </div>
            <div className={c.addMessage}>
                <textarea value={props.dialogsPage.newMessage} onChange={messageChange}></textarea>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    );
}

export default Dialogs;