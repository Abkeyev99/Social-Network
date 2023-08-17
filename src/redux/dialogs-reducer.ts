import {ActionsTypes, DialogsPageType, StateType, StoreType} from "./store";

const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE_NEW_MASSAGE_TEXT';
const SEND_MASSAGE = 'SEND_MASSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: "Ars"},
        {id: 2, name: "Marik"},
        {id: 3, name: "Abzal"},
        {id: 4, name: "Aza"},
        {id: 5, name: "Ice"},
    ],

    messages: [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Beautiful weather today!"},
    ],
    newMessageBody: "",
};

export const dialogsReducer = (state: any = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_TEXT:
            return{
                ...state,
                newMassageBody: action.body
            }
        case SEND_MASSAGE:
            let body = state.newMassageBody
            return {
                ...state,
                newMassageBody: '',
                messages: [...state.messages,{id: 4, message: body}]
            }
        default:
            return state
    }
};
export const sendMessageActionCreator = () => ({type: SEND_MASSAGE}) as const
export const updateNewMessageBodyActionCreator = (body: string) =>
    ({type: UPDATE_NEW_MASSAGE_TEXT, body: body}) as const
