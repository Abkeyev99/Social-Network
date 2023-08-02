import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./Profileinfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";



export type ProfileType = {
    profilePage:ProfilePageType
    addPost:() => void
    updateNewPostText:(newText: string)=>void


}




const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );

};

export default Profile;