const io = require("socket.io-client");
const socket = io(location.origin);
const $ = require("jquery");



$("#input-color").on("change",function (){
    socket.emit("setColor",this.value) 
});


