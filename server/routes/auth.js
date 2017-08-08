const express = require('express');


const router = express.Router();


router.post('/signup', (req, res) => {
  const newUserId = Math.floor(Math.random() * 1000000);

  // console.log(req.headers);


  res.send({ id: newUserId });
  // res.status(200).end();
});

module.exports = router;
