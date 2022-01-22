import React from 'react'
import './HeaderOptions.css'


function HeaderOptions ({Icon, avatar, title}) {
    return (
        <div className="headerOption">  
            {Icon && <Icon className="headerOption__icon" />}
            {
                avatar && 
                <img className="headerOption__icon" src={avatar} alt=""/>
            }
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions