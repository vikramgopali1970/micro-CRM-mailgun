var express = require('express');
var Club = require('../routes/UsersDb');
var router = express.Router();
var qs = require("querystring");
var http = require("https");



router.post('/', function(req, res, next) {
  console.log('entered the post req with param',req.body.sendCatagory);

  function getCatagoryUser(){
    var q = Club.find({catagory : req.body.sendCatagory});
    return q;
  }

  var toArray = [];

  var qryStr = getCatagoryUser();
  qryStr.exec(function(err, resCatagories){
    /*console.log(resCatagories);*/
    resCatagories.forEach(function(toUsr){
      toArray.push(toUsr.email);
    })
    sendpah(toArray);
  });

  var sendpah = function(toAddr){
    var options = {
      "method": "POST",
      "hostname": "api.mailgun.net",
      "port": null,
      "path": "/v3/2mbrothers.com/messages",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": "Basic YXBpOmtleS00NDFjM2JiNDdlMWFmMzUxOGRhODgxNTRjZmUzNTI3ZA==",
        "cache-control": "no-cache",
        "postman-token": "77fba681-a11c-1bc9-8170-39e997c58f89"
      }
    }


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

    req.write(qs.stringify({ to: toAddr,
      from: 'Excited User <mailgun@2mbrothers.com>',
      text: 'this is a testing mail from mailgun server sent by Vikram Gopali. Guys if u get this mail just let me know. If u are reading this' +
      'my code is working and reach out to me on whatssapp to confirm the reception of this mail',
      subject: 'from Vikram Gopali'  }));
    req.end();
  }

  res.status(200);
  res.json({success: true});
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
      res.json({catagories:resCatagories});
  })
});

router.get('/deleteList', function (req, res, next) {
  console.log('delete request',req.query.deletelist);

  Club.remove({catagory:req.query.deletelist},function (err) {
    if (err) throw err;

    res.json({status:'success'});
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

});
module.exports = router;
