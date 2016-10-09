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
    if(JSON.parse(val).catagory == req.query.catagory){
      console.log('need this now',JSON.parse(val).catagory,req.query.catagory)
      dbpushUsers.push(JSON.parse(val));
    }
  });
  console.log('did this print',dbpushUsers);

  dbpushUsers.forEach(function(userItem){
    var saveuser = new Club({fname:userItem.fname, lname:userItem.lname, email:userItem.email, catagory:userItem.catagory});

    return new Promise(function(resolve, reject) {
      saveuser.save(function (err) {
        if (err) throw err;
        console.log('User saved successfully!');
        resolve();
      });
    });
  })

  /*return new Promise(function(resolve, reject){
    Club.collection.insertMany(dbpushUsers, function(err,r){
      console.log('inside save');
      assert.equal(null, err);
      assert.equal(dbpushUsers.length, r.insertedCount);
    });
  });*/

  res.json({success:true});
});

module.exports = router;
