import React from 'react';
import {} from "../../App";
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

type DialogType = {
    store: StoreType
}

const DialogsContainer = (props: DialogType) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))

    }

    return <Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state}
    />;
};

export default DialogsContainer