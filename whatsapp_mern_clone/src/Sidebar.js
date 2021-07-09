import React, {useEffect, useState} from 'react';

import SidebarChat from './SidebarChat';

import './Sidebar.css';
import { IconButton, Avatar } from '@material-ui/core';
import { DonutLarge, Chat, MoreVert, SearchOutlined } from '@material-ui/icons';


function Sidebar({messages}) {

    const [seed, setSeed] = useState("");
    
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*6000));
    },[])

    return (
        <div className="sidebar">
            <div className="sidebar__header">                
                <Avatar src= {`https://avatars.dicebear.com/api/human/:${seed}.svg`}/>
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
                {messages.map((message, id)=>{
                        return (
                            <SidebarChat message={message} key={id}/>
                        )
                })}
            </div>

        </div>    
    )
}

export default Sidebar
