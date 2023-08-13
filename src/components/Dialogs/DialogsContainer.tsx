import React from 'react';
import {} from "../../App";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import StoreContext from "StoreContext";


const DialogsContainer = () => {
    return <StoreContext.Consumer>
        { (store:any) => {
            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }

            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyActionCreator(body))

            }

            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={state}
            />;
        }
    }
    </StoreContext.Consumer>
};

export default DialogsContainer