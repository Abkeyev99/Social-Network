import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea ></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, haw are you&" like="211"/>
                <Post message="It's my first post" like="298"/>
            </div>
        </div>
    );
};

export default MyPosts;