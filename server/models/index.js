const mongoose = require('mongoose');

const connect = (uri) => {
  mongoose.connect(uri);

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
};

module.exports = connect;
