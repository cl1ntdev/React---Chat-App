"use client"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"




export default function Chat ({username,room} : {username:string,room:string}){

    const [message,setMessage] = useState<string>("")
    const handleSendMessage = () =>{

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
          {/* {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === username ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === username
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-900 border border-gray-200"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Send
          </Button>
        </form>
      </div>
    </div>
    )
}