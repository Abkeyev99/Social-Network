import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {} from "../../App";
import {DialogsPageType, StoreType} from "../../redux/store";

export type DialogType = {
    dialogsPage:DialogsPageType
    sendMessage:() => void
    updateNewMessageBody: (body: string) => void

}

const Dialogs = (props: DialogType) => {

    let state = props.dialogsPage


    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map((m) => <Message message={m.message}/>)
    let newMessagesBody = state.newMassageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange  = (e:any) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange }
                        value={newMessagesBody}
                        placeholder='Enter your massage'>
                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;