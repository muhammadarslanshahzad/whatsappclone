import React,{useEffect, useState} from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFileOutlined, MoreVert, InsertEmoticon, Mic, Send } from '@material-ui/icons'
import axios from './axios'

function Chat({messages}) {

    const [input, setInput] = useState("");
    const [seed, setSeed]=useState("");

    const name= "MAS"

    const sendMessage = async (e)=>{
        e.preventDefault();

        axios.post('/api/v1/messages/new',{
            message: input,
            name: "MAS",
            timeStamp: "Just now!",
            received: true,
        });

        setInput('');
    }

    useEffect(()=>{
        setSeed("100");
    },[])

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{name}</h3>
                    <p>last seen at 00:00</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message, id)=>{
                   return( <p className={`chat__message  ${message.received && "chat__receiver" }`} key={id} >
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">{message.timeStamp}</span>
                    </p>)
                })}
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)}  placeholder="types a message here" type="text"/>
                    <button  type="submit" onClick={sendMessage}>
                        <Send />
                    </button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat