import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";
import {ActionsTypes} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText: string
    dispatch: (type: ActionsTypes) => void
}


const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p =>
        <Post
            message={p.message}
            likesCount={p.likesCount}
        />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let AddPost = () => {
        props.dispatch({type: 'ADD-POST'})

    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                />
                </div>
                <div>
                    <button onClick={AddPost}>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;