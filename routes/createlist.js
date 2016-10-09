var express = require('express');
var router = express.Router();
var length = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('createlist',{});
});


router.get('/createuserSave', function(req, res, next){
 /* console.log(req.query.catagory);
  console.log(req.query.userArray);*/
  console.log(req.query.userlist);
  console.log('newly added items',req.query.userlist.length-length);
  length = req.query.userlist.length;
  console.log(length)
  res.json({success:true});
});

module.exports = router;
