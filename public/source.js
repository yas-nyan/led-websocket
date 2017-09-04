const io = require("socket.io-client");
const socket = io("http://localhost:3000");

socket.on("connect",(socket)=>{
    alert("connected")
})

socket.on("color",(data)=>{
    console.log(data);
    document.getElementById("main").style.backgroundColor = data;
    
});