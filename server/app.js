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
app.use(cors(corsOptions));

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chatMessage', (message) => {
    console.log('Received message:', message);

    io.emit('chatMessage', message);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
