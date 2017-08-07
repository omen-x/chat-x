const express = require('express');

const router = express.Router();


router.post('/signup', (req, res, next) => {
  const newUserId = Math.floor(Math.random() * 1000000);

});
