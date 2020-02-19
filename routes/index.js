var express = require('express');
var router = express.Router();
var fs = require('fs');
var obj;
fs.readFile('./public/JSON/mainData.json', 'utf8', function (err, data) {
  if (err) throw err;
  try {
    obj = JSON.parse(data);
  } catch (e) {
    console.error( e );
  }
});

router.get('/', function(req, res, next) {
  res.render('index', { data: obj });
});

module.exports = router;
