import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {dialogsReducer, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {followAC, setUsersAC, unfollowAC} from "./users-reducer";

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: { }
}
export type ProfilePageType = {
    posts: PostsPropsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
    newMassageBody:any
}
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsPropsType = {
    id: number
    name: string

}
export type MessagesPropsType = {
    id: number
    message: string
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>|
    ReturnType<typeof updateNewMessageBodyActionCreator> |
    ReturnType<typeof sendMessageActionCreator>|
    ReturnType<typeof followAC>|
    ReturnType<typeof unfollowAC>|
    ReturnType<typeof setUsersAC>





let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, haw are you?", likesCount: 21},
                {id: 2, message: "It's my first post", likesCount: 100},
                {id: 3, message: "GYM", likesCount: 432},
                {id: 4, message: "I love you sport", likesCount: 1890},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newMassageBody:""
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('Hello')
    },
    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    },
}

export default store;
//store- OOP
