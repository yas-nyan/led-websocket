const io = require("socket.io-client");
const socket = io(location.origin);
const $ = require("jquery")

socket.on("connect",(socket)=>{
    alert("connected")
})

socket.on("pushcolor",(data)=>{
    console.log(data);
    document.getElementById("main").style.backgroundColor = data;
    
});