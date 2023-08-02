import {renderEntireTree} from "../render";

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


let state: RootStateType = {
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
}


export type NewPostPropsType = {
    id: number
    message: string
    likesCount: number
}
export type AddPostPropsType = {
    newPost: NewPostPropsType
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state);
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state);
}

export default state