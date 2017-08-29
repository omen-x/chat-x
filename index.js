const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIo(server);


// ========>> GLOBALS <<========

global.app = app;
app.set('jwt-secret', process.env.JWT_SECRET);
app.set('db-uri', process.env.MONGODB_URI);


// ========>> ASSETS <<========

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// ========>> CONNECT DB <<========

require('./server/models').connect(app.get('db-uri'));


// ========>> BODY PARSER <<========

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// ========>> ROUTES <<========

  // api protection
const authCheck = require('./server/middleware/authCheck.js');

app.get('/api', authCheck);


const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


// ========>> SOCKET.IO <<========

let onlineUsers = [];


io.on('connection', (socket) => {
  console.log('a user connected');

  const { name, avatar } = socket.handshake.query;
  const id = socket.id;
  const newUser = { id, name, avatar: parseInt(avatar, 10) };


  // Send online-users list for the logged user
  if (onlineUsers.length > 0) {
    socket.emit('online users', onlineUsers);
  }


  // Update online-users
  onlineUsers.push(newUser);
  // Inform connected clients about a new user
  socket.broadcast.emit('new user logged', newUser);


  // Disconnect
  socket.on('disconnect', () => {
    console.log('user disconnected');

    // Remove user from online-users
    onlineUsers = onlineUsers.filter(client => client.id !== id);
    // Inform connected clients about a disconnected user
    socket.broadcast.emit('user disconnected', id);
  });


  // New message
  socket.on('new message', (msg) => {
    socket.broadcast.emit('new message', msg);
  });
});


// ========>> LISTEN <<========

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
