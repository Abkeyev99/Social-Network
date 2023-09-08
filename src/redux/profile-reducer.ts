import {ActionsTypes, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hi, haw are you?", likesCount: 21},
        {id: 2, message: "It's my first post", likesCount: 100},
        {id: 3, message: "GYM", likesCount: 432},
        {id: 4, message: "I love you sport", likesCount: 1890},
    ],
    newPostText: '',
    profile: null
}


export const profileReducer = (state:ProfilePageType = initialState, action:ActionsTypes) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText:  ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
                case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({type: ADD_POST} as const)
export const setUsersProfile = (profile:any) => ({type: SET_USERS_PROFILE, profile} as const)
export const updateNewPostTextActionCreator = (newText: any) => ({type: UPDATE_NEW_POST_TEXT, newText: newText} as const)

