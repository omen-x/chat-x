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

MessageSchema.methods.toJSON = function toJSON() {
  const obj = this.toObject();

  Object.defineProperty(obj, 'id', Object.getOwnPropertyDescriptor(obj, '_id'));
  delete obj.__v;
  delete obj._id;

  return obj;
};

module.exports = mongoose.model('Message', MessageSchema);
