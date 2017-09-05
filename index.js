const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

//magicNumbers
const PORT = 3000;
const staticDir = "/public";

let timer = {}
let RGB = [1,1,1]
io.on("connection",(socket)=>{
    socket.emit("pushcolor",makeColor(RGB))
    socket.on("setColor",(data)=>{
        console.log(data);
        socket.broadcast.emit('pushcolor',data);
    })

    socket.on("disconnect",(socket)=>{
        clearInterval(timer);
    });
})
const makeColor = function (RGB){
    //let colors = ["red","blue","green","orange","purple","cyan",""]
    //var random = colors[Math.floor(Math.random() * colors.length)];
    //let random = String(R+10) + String(G+10) + Str
    //return random
    let color = `rgb(${Math.round(RGB[0])},${Math.round(RGB[1])},${Math.round(RGB[2])})`;
    console.log(color);
    return color
}

app.use("/",express.static(__dirname + staticDir));
server.listen(PORT);




