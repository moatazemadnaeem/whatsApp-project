import React from 'react'
import './SideBar.css'
import {Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SideAva from './SideAva'
function SideBar() {
    return (
        <div className="sidebar">
            <div className="header">
                <IconButton>
                <Avatar src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/119163711_357613018757142_9066080526732840936_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=2pzWaXghV6oAX8ovR9J&_nc_ht=scontent-hbe1-1.xx&oh=c55e50608e43c7fad6a148ee9eda1082&oe=5FD955A1"/>
                </IconButton>
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>           
            </div>
            <div className="search__box">
                <div className="search__content">
                <SearchIcon/>
                <input placeholder="enter the person you want" type="text" />
                </div>
            </div>
            <div className="side__chats">
            <SideAva  key={Math.floor((Math.random()*10000)+1)}/>
            <SideAva  key={Math.floor((Math.random()*10000)+1)}/>
            <SideAva  key={Math.floor((Math.random()*10000)+1)}/>
           
            </div>
            
        </div>
    )
}

export default SideBar
