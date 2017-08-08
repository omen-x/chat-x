const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
global.app = app;

const server = http.Server(app);
const io = socketIo(server);


// ========>> ASSETS <<========

app.use(express.static(path.join(__dirname, 'dist')));
// for react-router
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// ========>> CONNECT DB <<========

require('./server/models').connect(process.env.MONGODB_URI);


// ========>> BODY PARSER <<========

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ========>> ROUTES <<========

const authRoutes = require('./server/routes/auth');

app.use('/auth', authRoutes);


// ========>> SOCKET.IO <<========

const clients = [];

io.on('connection', (socket) => {
  console.log('a user connected');

  // clients.push(socket);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('new message', (msg) => {
    socket.broadcast.emit('new message', msg);
  });

  // socket.on('online users', () => {
  //   socket.
  // });
});


// ========>> LISTEN <<========

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
