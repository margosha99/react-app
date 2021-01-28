import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserInfo } from '../actions/getUserInfoAction';
import { Route, Switch, NavLink, Link, useRouteMatch } from 'react-router-dom'
import UserPosts from './UserPosts';
import UserAlbums from './UserAlbums';
import UserToDo from './UserToDo'


 function Userinfo({ userinfo, getUserInfo }) {
    const { id } = useParams();
    const { url, path } = useRouteMatch();

    const [currentTab, setCurrentTab] = useState('UserPosts');

    const tabList = [
        {
            name: 'UserPosts',
            label: 'Posts',
            content: <UserPosts />
        },
        {
            name: 'UserAlbums',
            label: 'Albums',
            content: <UserAlbums />
        },
        {
            name: 'UserToDo',
            label: 'To do',
            content: <UserToDo />
        },

    ]

    useEffect(() => {
        getUserInfo(id)
    }, [])
    
    return (
    <div><h2>User info</h2>
        
            {userinfo.map(user => {
                return <ul className="userinfo">
                    <li className="userinfo__item">
                        <span className="userinfo__icon"><i className="zmdi zmdi-email zmdi-hc-2x"></i></span>
                        <div className="userinfo__details">
                            <p>{user.email}</p>
                            <span>Email</span>
                        </div>
                    </li>
                    <li className="userinfo__item">
                    <span className="userinfo__icon"><i className="zmdi zmdi-phone zmdi-hc-2x"></i></span>
                    <div className="userinfo__details">
                        <p>{user.phone}</p>
                        <span>Mobile</span>
                    </div>
                </li>
                <li className="userinfo__item">
                    <span className="userinfo__icon"><i className="zmdi zmdi-pin zmdi-hc-2x"></i></span>
                    <div className="userinfo__details">
                        <p>{user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                        <span>Work</span>
                    </div>
                </li>
            
                <li className="userinfo__item">
                    <span className="userinfo__icon"><i className="zmdi zmdi-instagram zmdi-hc-2x"></i></span>
                    <div className="userinfo__details">
                        <p>@{user.website}</p>
                        <span>Social Channels</span>
                    </div>
                </li>
            
                <li className="userinfo__item">
                    <span className="userinfo__icon"><i className="zmdi zmdi-ungroup zmdi-hc-2x"></i></span>
                    <div className="userinfo__details">
                        <p>{user.company.bs}, {user.company.catchPhrase}</p>
                        <span>Segments</span>
                    </div>
                </li>
                </ul>
            })}

        <div>
            {tabList.map((tab, i) => (
                <a 
                    key={i}
                    onClick={() => setCurrentTab(tab.name)} 
                    className={(tab.name === currentTab) ? 'active tab' : 'tab'}>
                    {tab.label}
                </a>
                )
            )}

            {tabList.map((tab, i) => {
                if(tab.name === currentTab) {
                    return <div key={i}>{tab.content}</div>;
                } else {
                    return null;
                }
            })}
        </div>
    </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        userinfo: state.userInfo.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: (userId) => dispatch(fetchUserInfo(userId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Userinfo)