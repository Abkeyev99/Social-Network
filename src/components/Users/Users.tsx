import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/imagAva.png'
import {InitialStateType} from "../../redux/users-reducer";


export type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    usersPage: InitialStateType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>

                {pages.map(p => {
                    return <span className={props.usersPage.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}
                    >{p}</span>
                })}
            </div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photoUrl ! == null ? userPhoto : u.photoUrl}
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                    <span>
    <span>
        <div>{u.fillName}</div>
    <div>{u.status}</div>
    </span>
    <span>
    <div>{u.fillName}</div>
    <div>{"u.location.city"}</div>
    </span>
    </span>
                </div>)
            }
        </div>
    );
};

export default Users;