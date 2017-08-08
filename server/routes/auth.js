const express = require('express');
const User = require('mongoose').model('User');

const router = express.Router();


router.post('/signup', (req, res) => {
  const name = req.body.name;
  const newUser = new User({ name });

  newUser.save((err) => {
    if (err) throw err;
    res.status(200).end();
  });

  // res.send({ id: newUserId });
});


module.exports = router;
