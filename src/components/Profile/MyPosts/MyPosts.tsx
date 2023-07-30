import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let PostsData = [
        {id: 1, message: "Hi, haw are you&", likeCount: "211"},
        {id: 2, message: "It's my first post", likeCount: "298"},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
               <div><textarea ></textarea></div>
               <div><button>Add Post</button></div>

            </div>
            <div className={s.posts}>
                <Post message={PostsData[0].message} likeCounte={PostsData[0].likeCount}/>
                <Post message={PostsData[1].message} likeCounte={PostsData[1].likeCount}/>
            </div>
        </div>
    );
};

export default MyPosts;