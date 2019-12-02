var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/CIAOOO', function(req, res, next) {
  res.send('MI CHIAMO VIRGOLA SONO UN GATTINO');
});
module.exports = router;
