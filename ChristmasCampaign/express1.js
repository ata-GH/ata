var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use('/dist', express.static('dist'));
app.listen(8002, '127.0.0.1');

