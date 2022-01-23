import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'


function Sidebar() {
    const user = useSelector(selectUser)
    return (
        <div className="sidebar">
            <div className='sidebar__top'>
                <img src='./linkedin.png' alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2498</p>
                </div>
                <div className="sidebar_stat">
                <p>Views on post</p>
                <p className='sidebar_statNumber'>2998</p> 
                </div>
            </div>

            <div className='sidebar_bottom'>
                <p>Recent</p>
                <div className="sidebar__recentItem">
                    <span className='sidebar__hash'>#</span>
                    <p>react.js</p>   
                </div>
                <div className="sidebar__recentItem">
                    <span className='sidebar__hash'>#</span>
                    <p>training</p>   
                </div>
                <div className="sidebar__recentItem">
                    <span className='sidebar__hash'>#</span>
                    <p>jobs</p>   
                </div>
            </div>
        </div>
    )
}

export default Sidebar