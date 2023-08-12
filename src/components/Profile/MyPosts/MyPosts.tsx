import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostPropsType} from "./Post/Post";

type MyPostsPropsType = {
    posts: PostPropsType[]
    newPostText: string
    updateNewPostText:(text:string)=>void
    addPost: ()=>void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement =  React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text);
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
                    <button onClick={onAddPost}>Add Post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;