var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

// middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// start server
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});
