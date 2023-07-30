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

    let dialogData = [
        {id: 1, name: "Ars"},
        {id: 2, name: "Marik"},
        {id: 3, name: "Abzal"},
        {id: 4, name: "Aza"},
        {id: 5, name: "Ice"},
    ]
    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Beautiful weather today!"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>

                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;