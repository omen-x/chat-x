const express = require('express');
const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');


const router = express.Router();


router.post('/signup', (req, res) => {
  const { name, password, email, avatar } = req.body;

  const newUser = new User({ name, password, email, avatar });

  newUser.save((err, user) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          error: 'This email is already taken.'
        });
      }

      return res.status(400).json({
        error: 'Could not process the form.'
      });
    }

    const payload = {
      sub: user._id
    };

    const token = jwt.sign(payload, app.get('jwt-secret'), { expiresIn: '4 days' });
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    };

    return res.json({
      message: 'Successful registration',
      user: userData,
      token
    });
  });
});


router.post('/login', (req, res, next) => {
  const { email, password } = req.body;


  User.findOne({ email }, (err, user) => {
    if (err) return next(new Error(err));

    if (!user) return res.status(401).json({ error: 'Incorrect email' });

    return user.comparePassword(password, (passwordErr, correct) => {
      if (passwordErr) return next(new Error(passwordErr));
      if (!correct) return res.status(401).json({ error: 'Incorrect password' });

      const payload = {
        sub: user._id
      };

      const token = jwt.sign(payload, app.get('jwt-secret'), { expiresIn: '4 days' });

      return res.json({
        message: 'Success logging',
        token
      });
    });
  });
});


module.exports = router;
