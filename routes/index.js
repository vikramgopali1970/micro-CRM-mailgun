var express = require('express');
var Club = require('../routes/UsersDb');
var router = express.Router();
var qs = require("querystring");
var http = require("https");

router.post('')

router.post('/', function(req, res, next) {
  console.log('entered the post req')
  var options = {
    "method": "POST",
    "hostname": "api.mailgun.net",
    "port": null,
    "path": "/v3/sandbox224fba4d033a4162906e00f11ce13aed.mailgun.org/messages",
    "headers": {
      "content-type": "application/x-www-form-urlencoded",
      "authorization": "Basic YXBpOmtleS00NDFjM2JiNDdlMWFmMzUxOGRhODgxNTRjZmUzNTI3ZA==",
      "cache-control": "no-cache",
      "postman-token": "83d4c6e1-1fa7-b95e-6521-1c6741f6cc85"
    }
  };

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(qs.stringify({ to: 'vikramgopali.93@gmail.com',
    from: 'Excited User <mailgun@sandbox224fba4d033a4162906e00f11ce13aed.mailgun.org>',
    text: 'this is a testing mail from mailgun server and sending from node',
    subject: 'testing mail' }));
  req.end();


});







/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/getCatagories', function(req, res, next){
  
  function getcataagories(){
    var q = Club.find().distinct('catagory');
    return q;
  }
  
  var queryExe = getcataagories();
  queryExe.exec(function(err, resCatagories){
   
      /*console.log(resCatagories);
      console.log(resCatagories.length);*/
      res.json({catagories:resCatagories});
  })
});


router.get('/catatgoryUsers', function(req, res, next){
  console.log('look here bro '+req.query.catagory);
  var catagoryChck = req.query.catagory;
  function getcataagoryUsers(){
    var q = Club.find({catagory : catagoryChck});
    return q;
  }

  var queryexec = getcataagoryUsers();
  queryexec.exec(function(err, resultsUsrCatagory){
    //console.log(resultsUsrCatagory);
    res.json({catagoryusers: resultsUsrCatagory})
  })

 /* function getcatagory(){
    var query = Club.find({});
    return query;
  }
  var free= [];
  var premium = [];
  var ultrapremium = [];*/

  /*var q = getcatagory();
  q.exec(function(err,results){
    results.forEach(function(record){
      if(record.catagory == 'free')
        free.push(record);
      else if (record.catagory == 'premium')
        premium.push(record);
      else
        ultrapremium.push(record);
    });
    res.json({ststus:'success', free:free, premium:premium, ultrapremium:ultrapremium});
    //console.log(premium,premium.length);
  });*/
})
module.exports = router;
