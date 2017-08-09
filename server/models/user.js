const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: String,
  password: String,
  email: {
    type: String,
    index: { unique: true }
  }
});


// ========>> METHODS <<========

/**
 * Compare the passed password with the value in the database
 *
 * @param {string} password
 * @param {function} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


// ========>> PRE-SAVE HOOK <<========

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt((saltErr, salt) => {
    if (saltErr) return next(saltErr);

    return bcrypt.hash(user.password, salt, (hashErr, hash) => {
      if (hashErr) return next(hashErr);

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


module.exports = mongoose.model('User', UserSchema);
