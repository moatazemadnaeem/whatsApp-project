import React,{useEffect,useState} from 'react'
import './App.css';
import SideBar from './SideBar'
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from './axios'
function App() {
  const [Data,SetData]=useState([]);
  useEffect(()=>{
    async function fecthData(){
      const req=await axios.get('/messages/v2');
          SetData(req.data);
    }
    fecthData();
  },[])
useEffect(()=>{
  const pusher = new Pusher('b32588e4974ecdb093a9', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (data)=> {
    SetData([...Data,data]);
  });

  
},[Data])
console.log(Data)
  return (
    <div className="app">
    <div className="app-container">
    <SideBar key={Math.floor((Math.random()*10000)+1)} />
    <Chat messages={Data}  key={Math.floor((Math.random()*10000)+1)}/>
    </div>
    </div>
  );
}

export default App;
