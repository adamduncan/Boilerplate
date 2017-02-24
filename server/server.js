var express = require('express');
var app = express();
var path = require('path');

var rootDir = express.static(path.join(__dirname, '../public'));

app.use(rootDir);

app.get('/', function (req, res) {
  res.sendFile(rootDir + '/index.html');
});

app.listen(3000, function () {
  console.log('Site running on port 3000!');
});
