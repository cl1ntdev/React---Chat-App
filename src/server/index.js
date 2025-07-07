import { createServer } from "http";
import { Socket } from "socket.io";
import express from 'express'
import { Server } from "socket.io";


const port = 3001
const app = express()
const server = createServer(app)


const io = new Server(server,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log("User is connected with id: " +socket.id )


    //client_ready is form Chat.tsx this shows when client is on the chat
    socket.on("client_ready_send",({room,message,username})=>{
        console.log('Message Revieved: ', room + " message: ",message + " - " + username)

        io.to(room).emit("recieve_client",{username,message})
    })

    socket.on('check_room',(room)=>{
        socket.join(room)
        console.log("you have joined the room: "+ room)
    })


})


server.listen(port,()=>{
    console.log('server runnning in port ',port)
})