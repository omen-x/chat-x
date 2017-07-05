const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

});


http.listen(3000, () => {
  console.log('Listening on port 3000');
});




.node-webform input[type=checkbox] {
  width: auto;
}
.feedback__form-wrap form .form-item input[type=checkbox] {
  width: auto !important;
}
form .form-item input[type=checkbox] {
  width: auto !important;
}

