var express = require('express');
var Club = require('../routes/UsersDb');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});


router.get('/.json', function(req, res, next){
  function getcatagory(){
    var query = Club.find({});
    return query;
  }
  var free= [];
  var premium = [];
  var ultrapremium = [];

  var q = getcatagory();
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
  });
})
module.exports = router;
