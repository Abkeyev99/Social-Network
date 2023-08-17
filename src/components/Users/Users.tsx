import React from 'react';
import styles from './users.module.css';

const Users = (props:any) => {
    if(props.users.length === 0){
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl:'https://pikuco.ru/upload/test_stable/e13/e131e3db319749d39d7c719e5da6a7ac.webp',
                    followed: false,
                    fillName: "Artem",
                    status: "i am a boss",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 2,
                    photoUrl:'https://pikuco.ru/upload/test_stable/e13/e131e3db319749d39d7c719e5da6a7ac.webp',
                    followed: true,
                    fillName: "Dima",
                    status: "i am a boss too",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl:'https://pikuco.ru/upload/test_stable/e13/e131e3db319749d39d7c719e5da6a7ac.webp',
                    followed: true,
                    fillName: "Andrew",
                    status: "i am a boss to",
                    location: {city: "Kiev", country: "Ukraine"}
                },

            ],
        )
    }



    return (
        <div>{
            props.users.map(u=> <div key={u.id}>\
                <span></span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}

                </div>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    );
};

export default Users;