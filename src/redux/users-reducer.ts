import {ActionsTypes} from "./store";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

type UsersType = {
    id: number,
    followed: boolean,
    fillName: string,
    status: string,
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}

let initialState = {

}


export const usersReducer = (state: UsersType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state
    }
}
export const followAC = (userId: any) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: any) => ({type: SET_USERS, users} as const)

