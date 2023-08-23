import React from 'react';
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imgA}>
                <img src="https://secretmag.ru/imgs/2022/05/09/09/5397530/869f90de763ccf15b9cfe0d98beb2da083bd1b58.jpeg"/>
            </div>
            <div className={s.descriptionBlock}>Avatar</div>
        </div>
    );
};

export default ProfileInfo;