var express = require('express');
var router = express.Router();
//sdfghj
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
});

module.exports = router;