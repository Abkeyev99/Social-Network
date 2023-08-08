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
export type ProfilePageType = {
    posts: PostsPropsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsPropsType[]
    messages: MessagesPropsType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export type NewPostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type AddPostPropsType = {
    newPost: NewPostPropsType
}

export type AddPostActionsTypes = {
    type: 'ADD-POST'
    newPostText:string
}
export type ChangeNewTextActionsTypes = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText:string
}
export type ActionsTypes = AddPostActionsTypes | ChangeNewTextActionsTypes

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscriber: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action:ActionsTypes ) => void

}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, haw are you?", likesCount: 21},
                {id: 2, message: "It's my first post", likesCount: 100},
                {id: 3, message: "GYM", likesCount: 432},
                {id: 4, message: "I love you sport", likesCount: 1890},
            ],
            newPostText: 'IT-COOL',
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
        },
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        }
    },

}

export default store;
//store- OOP
