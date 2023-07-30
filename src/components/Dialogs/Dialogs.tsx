import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    return <div className={s.dialog}>
        <NavLink to={"/dialog/" + props.id}> {props.name}</NavLink>
    </div>
}
const Message = (props: any) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props: any) => {

    let dialogs = [
        {id: 1, name: "Ars"},
        {id: 2, name: "Marik"},
        {id: 3, name: "Abzal"},
        {id: 4, name: "Aza"},
        {id: 5, name: "Ice"},
    ]
    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Beautiful weather today!"},
    ]

    let dialogsElements = dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map( m => <Message message={m.message}/>)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;