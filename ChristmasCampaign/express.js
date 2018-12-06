var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json());
let totalPage = 20;

app.post('/backstage/captcha-hashkey/',(req,res)=>{
  res.json({code:0,data:{}});
})
app.post('/admin/login', (req, res) => {
  res.json({
    code: 0,
    status: 1,
    message: '登录成功'
  })
});
app.post('/statistics/order/success', (req, res) => {
  let data = {};
  if (req.body.type == 1) {
    data = {
      time: ['7-12', '7-13', '7-14', '7-15', '7-16', '7-17', '7-18'],
      series: [100, 130, 200, 170, 90, 80, 120]
    }
  } else if (req.body.type == 2) {
    data = {
      time: ['7-4', '7-8', '7-12', '7-16', '7-21', '7-25', '7-29'],
      series: [100, 130, 200, 170, 90, 80, 120]
    }
  }
  else {
    data = {
      time: ['2018-1', '2018-2', '2018-3', '2018-4', '2018-5', '2018-6', '2018-7'],
      series: [100, 130, 200, 170, 90, 80, 120]
    }
  }
  if (req.body.assign == 'api') {
    data.series = [900, 890, 760, 760, 750, 720, 690, 650, 640, 640];
    data.time = ['语音', '一对一通讯1', '一对一通讯2', '一对一通讯3', '一对一通讯4', '一对一通讯5', '一对一通讯6', '一对一通讯7', '一对一通讯8', '一对一通讯9'];
  }
  res.json({
    code: 0,
    status: 1,
    data: {
      'type': req.body.type,
      time: data.time,
      series: data.series,
    }
  })
});
app.get('/admin/info', (req, res) => {
  res.json({
    message: "获取管理员信息成功",
    status: 1,
    data: {
      avatar: 'default.jpg',
      name: '小胖墩'
    }
  })
});
app.post('/upload',upload.any(),(req,res)=>{
  console.log(req.files);
  console.log(req);
  res.json({code:0,data:JSON.stringify(req.body)})
});
let arr = [];
let arrMessage = [];
for (let j = 0; j < totalPage; j++) {
  arr.push({
    id: j,
    username: '用户' + j,
    phone: j % 2 == 0 ? '手机号' + j : undefined,
    time: '2018-09-17 12:45:45',
    status: (j % 4) + 1, /* 0全部 1未认证、2待审核、3认证通过、4认证未通过*/
    // opStatus: j % 2
    companyName: j % 2 == 0 ?'企业名称': false
  });
  arrMessage.push({
    id: j,
    content: ' 此处为消息标题此处为消息标题',
    status: j % 2,
    time: '2018-09-17  12:45:45'
  });
}
app.post('/users/list', (req, res) => {
  let arr_new = arr;
  if (req.body.status != 0) {
    arr_new = arr_new.filter((value) => {
      return value.status == req.body.status && value.opStatus == req.body.opStatus;
    });
  }
  if (req.body.search != '') {
    arr_new = arr_new.filter((value) => {
      return value.username == req.body.search;
    })
  }
  if (req.body.opStatus != 0) {
    arr_new = arr_new.filter((value) => {
      return value.opStatus == req.body.opStatus;
    });
  }
  res.json({
    status: 0,
    data: arr_new.slice(5 * (req.body.page - 1), req.body.page * 5),
    totalPage: arr_new.length / 5
  });
});
app.post('/system-message', (req, res) => {
  let arr_new = arrMessage;
  if (req.body.status != 0) {
    arr_new = arr_new.filter((value) => {
      return value.status == req.body.status - 1;
    })
  }
  res.json({
    status: 0,
    data: arr_new.slice(5 * (req.body.page - 1), req.body.page * 5),
    totalPage: arr_new.length / 5
  });
});
app.use(express.static('./backstage'));
app.listen(8002, '127.0.0.1');















