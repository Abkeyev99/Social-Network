import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StateType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;