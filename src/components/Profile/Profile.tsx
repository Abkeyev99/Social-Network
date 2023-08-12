import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StateType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    store:StateType

}


const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

export default Profile;