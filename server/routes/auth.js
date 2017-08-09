const express = require('express');
const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');


const router = express.Router();


router.post('/signup', (req, res) => {
  const { name, password, email } = req.body;

  const newUser = new User({ name, password, email });

  newUser.save((err, user) => {
    if (err) throw err;

    res.json({
      message: 'Successful registration'
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
        message: 'Successful logging',
        token
      })
    });
  });
});


module.exports = router;
