import React from 'react';

import SidebarChat from './SidebarChat';

import './Sidebar.css';
import { IconButton, Avatar } from '@material-ui/core';
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons';


function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">                
                <Avatar src="https://image.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>

        </div>    
    )
}

export default sidebar
