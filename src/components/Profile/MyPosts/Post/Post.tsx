import React from 'react';
import s from './Post.module.css'

type MessageType = {
    message: string
    likeCounte: string
}

const Post = (props: MessageType) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg"/>
            {props.message}
            <div>
                <span>like {props.likeCounte}</span>
            </div>
        </div>
    );
};

export default Post;