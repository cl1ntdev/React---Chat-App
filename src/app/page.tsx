"use client"
import { useState } from "react";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";




export default function Home() {
  const [username,setUsername] = useState<String>("")
  const [room,setRoom] = useState<String>("")
  const [isLogin,setLogin] = useState(false)

  const processLogin = (username:String,room:String) =>{
    setUsername(username)
    setRoom(room)
    setLogin(true)

  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {isLogin ? (
        <Chat username={username} room={room} />
      ):(
        <Login onLogin={processLogin} />
      )}
    </div>
  );
}
