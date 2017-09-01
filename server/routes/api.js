const express = require('express');
const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');

const router = express.Router();

/**
 * Extracts user-id from token
 * @param  {request object} req
 * @return {number}     user._id from DB
 */
function getUserId(req) {
  const token = req.headers.authorization.split(' ')[1];
  return jwt.decode(token).sub;
}

router.post('/user', (req, res) => {
  User.findById(getUserId(req)).then(user => {
    console.log(user._id);
    res.json({
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      id: user._id,
    });
  });
});

module.exports = router;
