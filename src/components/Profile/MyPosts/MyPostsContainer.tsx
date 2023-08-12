import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import { StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostsPropsContainerType = {
    store: any
}

const MyPostsContainer = (props: MyPostsPropsContainerType) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }

    let onPostChange = (text:string) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)

    }

    return (<MyPosts
        updateNewPostText={onPostChange} addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}

    />);
};

export default MyPostsContainer;