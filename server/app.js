const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const corsOptions = {
      origin: 'http://localhost:5173',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204,
    };
app.use(cors(corsOptions))

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');


});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});































// const express = require('express')
// const http = require('http')
// const socketIo = require('socket.io')
// const cors = require('cors')
// ///
// const app = express()
// app.use(cors())
// const server = http.createServer(app)
// const io =socketIo(server, {
//     cors:{
//         origin: 'http://localhost:5173/',
//     },
// })
// ///
// io.on('connection', (socket)=>{
//     console.log("USER CONNECTED")
// })
// server.listen(3000, ()=>{
//     console.log("SERVER RUNING")
// })