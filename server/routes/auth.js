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
        res.status(409).json({
          error: 'This email is already taken.'
        });
      }

      res.status(400).json({
        error: 'Could not process the form.'
      });
    }

    const token = jwt.sign(user._id, app.get('jwt-secret'), { expiresIn: '4 days' });
    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar
    };

    res.json({
      message: 'Successful registration',
      user: userData,
      token
    });
  });
});


router.post('/login', (req, res) => {
  const { email, password } = req.body;


  User.findOne({ email }, (err, user) => {
    if (err) throw err;

    if (!user) res.json({ error: 'Incorrect email' });

    user.comparePassword(password, (passwordErr, correct) => {
      if (passwordErr) throw passwordErr;
      if (!correct) res.json({ error: 'Incorrect password' });

      const token = jwt.sign(user._id, app.get('jwt-secret'), { expiresIn: '4 days' });

      res.json({
        message: 'Success logging',
        token
      });
    });
  });
});


module.exports = router;
