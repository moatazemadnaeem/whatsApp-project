import React,{useState} from 'react'
import './Chat.css'
import {Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import axios from './axios'

function Chat({messages}) {
    const [input,SetInput]=useState("");
    const sendmessage=async (e)=>{
        console.log("hello...")
            await axios.post('/messages/v1',{
                    message: input,
                    name: "ahmed",
                    time: "new time 7",
                    recieved: true
            })

            
        SetInput("");
    }
    return (
        <div className="chat">
          <div className="chat__holder">
              <Avatar/>
              <div className="chat__info">
                  <h5>room chat</h5>
                  <p>this person was activ in last...</p>
              </div>
              <div className="chat__right">
                  <IconButton>
                      <SearchIcon/>
                  </IconButton>
                  <IconButton>
                      <AttachFileOutlinedIcon/>
                  </IconButton>
                  <IconButton>
                      <MoreVertIcon/>
                  </IconButton>
              </div>
          </div>
          <div className="msgcontainer">
          {messages.map((message)=>{
             
              if(message.recieved){
                return(      
                  <div  key={message._id} className="chat__msg">
                  <div className="r_h_s"> 
                  <h5>{message.name}</h5>
                    <div className="chat__box">
                            <p>{message.message}</p>
                           <span>
                               {new Date().toUTCString()}
                            </span> 
                    </div>
                  </div>
                  </div>
                )
              }
              else{
                  return(
                      <div  key={message._id} className="chat__msg">
                        <div className="l_h_s"> 
                            <h5>{message.name}</h5>
                                <div className="chat__box">
                                    <p>{message.message}</p>
                                        <span>
                                        {new Date().toUTCString()}
                                        </span> 
                                </div>
                         </div>
                    </div>
                  )    
              }
             
          })}
          
          </div>
          
          <div className="send__msg">
          <IconButton>
          <EmojiEmotionsOutlinedIcon/>
          </IconButton>
              <form>
                    <input value={input} onChange={e=>SetInput(e.target.value)} placeholder="enter message" type="text" />
                    <button onClick={sendmessage} type="submit">submit</button>
              </form>
          <IconButton>
          <MicOutlinedIcon/>
          </IconButton>
              
          </div>
        </div>
    )
}

export default Chat
