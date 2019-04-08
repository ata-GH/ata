var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing application/x-www-form-urlencoded
// app.use(bodyParser.json());


app.post('/admin', function (req, res) {
  // console.log(req.body);
  res.json(req.body);
});
app.post('/upload',upload.any(),(req,res)=>{
  // console.log(req.files);
  res.json({code:0,data:JSON.stringify(req.body)})
});
app.use(express.static('./dist'));
app.listen(8002, '127.0.0.1');















