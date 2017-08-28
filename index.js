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

const clients = [];

io.on('connection', (socket) => {
  console.log('a user connected');
  const { name, avatar } = socket.handshake.query;
  const newUser = { name, avatar };


  clients.push(newUser);

  if (clients.length > 0) {
    socket.broadcast.emit('online users', clients);
  }


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
