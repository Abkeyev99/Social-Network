import {ActionsTypes, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi, haw are you?", likesCount: 21},
        {id: 2, message: "It's my first post", likesCount: 100},
        {id: 3, message: "GYM", likesCount: 432},
        {id: 4, message: "I love you sport", likesCount: 1890},
    ],
    newPostText: '',
}


export const profileReducer = (state:ProfilePageType = initialState, action:ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const updateNewPostTextActionCreator = (newText: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)

