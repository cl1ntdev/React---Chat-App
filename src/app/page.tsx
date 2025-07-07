"use client"
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
export default function Home() {
  const [username,setUsername] = useState("")
  const [room,setRoom] = useState("")
  const [isLogin,setLogin] = useState(false)

  const processLogin = (username:string,room:string) =>{
    setUsername(username)
    setRoom(room)
    setLogin(true)

  }


  return (
    <div className="flex items-center justify-center min-h-screen">
      {isLogin ? (
        <Chat username={username} room={room} />
      ):(
        <Login onLogin={processLogin} />
      )}
    </div>
  );
}
