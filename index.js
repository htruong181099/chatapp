const express = require('express');
const app = express();

const socket = require("socket.io");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, ()=>{
    console.log(`App listen on PORT ${PORT}`);
})

app.use(express.static('public'));

//socketio setup
const io = socket(server);

io.on('connection',(socket)=>{
    console.log('Made connection', socket.id);
})