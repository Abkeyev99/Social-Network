import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <img src="https://secretmag.ru/imgs/2022/05/09/09/5397530/869f90de763ccf15b9cfe0d98beb2da083bd1b58.jpeg"/>
            </div>
            <div>Avatar</div>
            <MyPosts />
        </div>
    );

};

export default Profile;