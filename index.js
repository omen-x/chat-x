const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIo(server);


app.use(express.static(path.join(__dirname, 'dist')));

// for react-router
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('new message', (msg) => {
    socket.broadcast.emit('new message', msg);
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
