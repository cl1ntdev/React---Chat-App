"use client"

// components
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"

// message rendering
import { io } from "socket.io-client"

const socket = io('http://localhost:3001')

type Messages = {
  username: String,
  message: String,
}

export default function Chat ({username,room} : {username:String,room:String}){

    // -------- > for testing 
    // useEffect(()=>{
    //   socket.emit("client_ready", "hello from client")
    // },)
    const [sentMessage,setSentMessage] = useState<String>("")
    const [roomMessages,setRoomMessages] = useState<Messages[]>([])

    //for checking Rooms and joining a speceifc room 
    useEffect(()=>{
      socket.emit("check_room",room) 

      const handleRecieveMess = ({username,message}:{username:String,message:String}) => {
        console.log(username + ": " + message)
        var newMessages:Messages = {
          username: username,
          message: message
        }
        setRoomMessages(prevMessages=>[...prevMessages,newMessages])
      }

      socket.on("recieve_client",handleRecieveMess)

          // Clean up listener on unmount or re-render
      return () => {
        socket.off("recieve_client", handleRecieveMess);
      };
    },[room])

    // useEffect(()=>{
    //   console.log(roomMessages)
    // },[roomMessages])
  
    
    

    const [message,setMessage] = useState<string>("")
    const handleSendMessage = () =>{
      console.log(username)
      console.log('working')
      socket.emit("client_ready_send",{room,message,username})
    }

    return(
        <div className="flex flex-col w-full p-20 h-screen bg-gray-100">
      <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-900">{username}</p>
          <p className="text-sm text-gray-600">Room: {room}</p>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="space-y-4">
          {roomMessages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.username === username ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.username === username
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900 border border-gray-200"
                }`}
              >
                <p className="text-sm">{msg.message}</p>
              </div>
            </div>
           ))}
        </div>
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSendMessage}>
            Send
          </Button>
        </div>
      </div>
    </div>
    )
}