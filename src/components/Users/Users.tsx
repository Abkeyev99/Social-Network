import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/imagAva.png'
import {InitialStateType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


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
  /*  let user =(user:any)=>{
        console.log(user)
    }*/
    return (
        <div>
            <div>

                {pages.map(p => {
                    return <span className={props.usersPage.currentPage === p ? styles.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}
                    >{p}   {/*  <button onClick={()=>{user(p)}}>+</button>*/} </span>
                })}
            </div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small ! == null ? userPhoto : u.photos.small}
                                 className={styles.userPhoto}/>

                        </NavLink>
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
         <div>{u.name}</div>
          <div>{u.status}</div>
                   </span>
                </div>)}

        </div>
    );
};

export default Users;