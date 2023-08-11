import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void

}


const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;