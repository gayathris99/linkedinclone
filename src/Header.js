import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'
import HeaderOptions from './HeaderOptions';
import { Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {logout} from './features/userSlice';
import { firebaseAuth } from './firebase';



function Header() {
    const dispatch = useDispatch()
    const logoutUser  = () => {
        dispatch(logout());
        firebaseAuth.signOut()
    }
    return (
        <div className='header'>
        <div className='header__left'>
        <img src="./linkedin.png" alt=""/>
        <div className='header__search'>
            <SearchIcon/>
            <input type="text" placeholder="Search Here"/>
        </div>
        </div>
        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationIcon} title="Notifications"/>
            <HeaderOptions avatar={Avatar} onClick={logoutUser}/>
        </div>
        </div>
    )
}

export default Header