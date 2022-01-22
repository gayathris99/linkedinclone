import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationIcon from '@material-ui/icons/Notifications'
import HeaderOptions from './HeaderOptions';



function Header() {
    return (
        <div className='header'>
        <div className='header__left'>
        <img src="./linkedin.png" alt=""/>
        <div className='header__search'>
            <SearchIcon/>
            <input type="text"/>
        </div>
        </div>
        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationIcon} title="Notifications"/>
            <HeaderOptions avatar="./linkedin.png"/>
        </div>
        </div>
    )
}

export default Header