var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function (req: any, res: any) {
  res.send("index.html");
});

module.exports = router;