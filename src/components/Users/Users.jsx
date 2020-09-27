import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/img/avatar.jpg'
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pageArr = [];
    for (let i = 1; i <= Math.ceil(props.totalCount / props.pageCount); i++) {
        pageArr.push(i);
    }
    return <div className={c.users}>
        <div className={c.title}>Users</div>
        <div className={c.pages}>
            {pageArr.map((p, k) => p === props.page
                ? <span className={`${c.page} ${c.a} ${c.selected}`} key={k}>{p}</span>
                : <span className={c.page} onClick={() => { props.changePage(p) }} key={k}>{p}</span>)}
        </div>
        {props.usersPage.users.map((u) => {
            return <div className={c.users__item} key={u.id}>
                <div className={c.user__avatar}>
                    <NavLink to={`/Profile/${u.id}`}><img src={u.photos.small === null
                        ? userPhoto
                        : u.photos.small} alt="null" />
                    </NavLink>
                    {u.followed === true
                        ? <button disabled={props.disabledUsers.some(id => id === u.id)} onClick={() => {
                            props.unfollowUser(u.id, props.unfollow)
                        }}>follow</button>
                        : <button disabled={props.disabledUsers.some(id => id === u.id)} onClick={() => {
                            props.followUser(u.id, props.follow)
                        }}>unfollow</button>
                    }
                </div>
                <div className={c.user__info}>
                    <div className={c.user__left}>
                        <div className={c.user__name}>
                            {u.name}
                        </div>
                        <div className={c.user__status}>
                            {u.status}
                        </div>
                    </div>
                    <div className={c.user__location}>
                        <div className={c.user__country}>
                            {'u.location.country'}
                        </div>
                        <div className={c.user__city}>
                            {'u.location.city'}
                        </div>
                    </div>
                </div>
            </div>
        })
        }
    </div>
}

export default Users;