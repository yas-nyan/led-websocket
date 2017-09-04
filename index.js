const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

//magicNumbers
const PORT = 3000;
const staticDir = "/public";

let timer = {}
io.on("connection",(socket)=>{
    socket.emit("color",randomColor());
    timer = setInterval(()=>{
        socket.emit("color",randomColor())
    },1000)
})
const randomColor = function (){
    let colors = ["red","blue","green"]
    var random = colors[Math.floor(Math.random() * colors.length)];
    return random
}

app.use("/",express.static(__dirname + staticDir));
server.listen(PORT);




