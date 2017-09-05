const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  type: String,
  date: String,
  text: String,
  author: String,
  authorId: String,
  authorAvatar: Number,
});

module.exports = mongoose.model('Message', MessageSchema);
