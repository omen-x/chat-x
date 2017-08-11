const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');


const authCheck = (req, res, next) => {
  if (!req.header.authorization) return res.status(401).end();

  const token = req.header.authorization.split(' ')[1];

  return jwt.verify(token, app.get('JWT_SECRET'), (err, decoded) => {
    // invalid signature or expiration
    if (err) return res.status(401).end();

    return User.findById(decoded.sub, (userErr, user) => {
      if (userErr || !user) return res.status(401).end();
      return next();
    });
  });
};


module.exports = authCheck;
