import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, haw are you?", likeCount: "211"},
        {id: 2, message: "It's my first post", likeCount: "100"},
        {id: 3, message: "GYM", likeCount: "432"},
        {id: 4, message: "I love you sport", likeCount: "1K"},
    ]

    let postsElements = posts.map(p=>  <Post message={p.message} likeCounte={p.likeCount}/> )


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;