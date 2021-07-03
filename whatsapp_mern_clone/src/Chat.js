import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFileOutlined, MoreVert, InsertEmoticon } from '@material-ui/icons'

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
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
                <p className="chat__message">
                    <span className="chat__name">Arslan</span>
                    this is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Arslan</span>
                    this is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                
                <p className="chat__message">
                    <span className="chat__name">Arslan</span>
                    this is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input placeholder="types a message here" type="text"/>
                    <button  type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chat