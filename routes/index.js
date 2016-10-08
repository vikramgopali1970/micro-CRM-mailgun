var express = require('express');
var Club = require('../routes/UsersDb');
var router = express.Router();

var pars = [];
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
    pars = resCatagories;
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
