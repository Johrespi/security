var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {

  res.render('token', { username: req.cookies['username'], title: 'Token' });
});

module.exports = router;