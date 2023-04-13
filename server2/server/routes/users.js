var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
/* GET users listing. */
router.get('/', auth.driverAuth,function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
