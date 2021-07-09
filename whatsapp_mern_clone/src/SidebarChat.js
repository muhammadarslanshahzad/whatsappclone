import React,{useEffect, useState} from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarChat.css';

function SidebarChat({message}) {
    
    const [seed, setSeed] = useState("");
    
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*6000));
    },[])

    return (
        <div className="sidebar__chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`}/> 
            <div className="sidebar__chatInfo">
                <h2>{message.name}</h2>
                <p>{message.message}</p>
            </div>
        </div>
    )
}

export default SidebarChat
