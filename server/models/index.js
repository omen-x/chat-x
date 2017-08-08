const mongoose = require('mongoose');


// Models
require('./user');


module.exports.connect = (uri) => {
  mongoose.connect(uri, { useMongoClient: true });
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
};

