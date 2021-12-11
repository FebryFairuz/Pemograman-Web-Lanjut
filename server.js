const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server, {
    cors: {
      origin: '*',
    }
});

io.on("connection", socket =>{
    socket.emit("your id",socket.id);
    socket.on("send message",body => {
        io.emit("messageX",body)
    })

})

server.listen(8000, () => console.log("server is running in port 8000"));
