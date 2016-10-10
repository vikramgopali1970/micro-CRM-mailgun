var express = require('express');
var Club = require('./UsersDb');
var router = express.Router();
var length = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('createlist',{});
});


router.get('/createuserSave', function(req, res, next){
  var dbpushUsers = [];

  req.query.userlist.forEach(function(val){
      dbpushUsers.push(JSON.parse(val));
  });
  console.log(dbpushUsers.length);
  console.log('newly added rows',dbpushUsers.length-length);


  dbpushUsers.forEach(function(userItem){
  var saveuser = new Club({fname:userItem.fname, lname:userItem.lname, email:userItem.email, catagory:userItem.catagory});

  return new Promise(function(resolve, reject) {
    saveuser.save(function (err) {
      if (err) throw err;
      console.log('User saved successfully!');
      resolve();
    });
  });
    length = dbpushUsers.length;
  });

  res.json({success:true});
});

module.exports = router;
