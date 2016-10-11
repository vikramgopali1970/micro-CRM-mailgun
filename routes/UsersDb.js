/**
 * Created by vgopali on 07-10-2016.
 */
var mongoose = require('mongoose');
var assert = require('assert');

console.log("coming here");
var usersDb = mongoose.connection;
usersDb.on('error', console.error.bind(console, 'connection error:'));
usersDb.once('open', function () {
    // we're connected!
    console.log('connected to contacts DB');
});

mongoose.connect('mongodb://localhost/testingDB1');

var Schema = mongoose.Schema;
var clubSchema = new Schema({
      fname: {
          type : String,
          required : true
      },
        lname:{
            type : String,
            required : false
        },
        email: {
            type:String,
            require:true
        },
        catagory:{
            type : String,
            required:false
        }
});


var Club  = mongoose.model('Club',clubSchema);

/*data = [
    {'fname' : 'vikram',
     'lname' : 'gopali',
     'email' : 'vikki.coolest@gmail.com',
     'mnumber' : '8892658583',
     'catagory' : 'free'
    },
    {'fname' : 'vivek',
        'lname' : 'mehta',
        'email' : 'vikram.1rn11cs121@gmail.com',
        'mnumber' : '8892658584',
        'catagory' : 'premium'
    },
    {'fname' : 'tarun',
        'lname' : 'chhabra',
        'email' : 'tarunpsc@gmail.com',
        'mnumber' : '8892658585',
        'catagory' : 'premium'
    },
    {'fname' : 'shikhar',
        'lname' : 'srivastav',
        'email' : 'vikramgopali.93@gmail.com',
        'mnumber' : '8892658586',
        'catagory' : 'ultra premium'
    },
    {
        'fname' : 'amogh',
        'lname' : 'venkatesh',
        'email' : 'amoghv.93@gmail.com',
        'mnumber' : '8892658587',
        'catagory' : 'ultra premium'
    },
    {
        'fname' : 'ritesh',
        'lname' : 'bhat',
        'email' : 'riteshbh1@gmail.com',
        'mnumber' : '8892658588',
        'catagory' : 'premium'
    },
    {
        'fname' : 'skanda',
        'lname' : 'bhat',
        'email' : 'skanda1205@gmail.com',
        'mnumber' : '8892658589',
        'catagory' : 'free'
    },
    {
        'fname' : 'rahul',
        'lname' : 'deshpande',
        'email' : 'rdrahuld4@gmail.com',
        'mnumber' : '8892658589',
        'catagory' : 'free'
    },
    {
        'fname' : 'srinivas',
        'lname' : 'Lg',
        'email' : 'lgsrini@gmail.com',
        'mnumber' : '8892658590',
        'catagory' : 'free'
    },
    {
        'fname' : 'venkatesh',
        'lname' : 'gopali',
        'email' : 'venkateshgopali@yahoo.com',
        'mnumber' : '8892658590',
        'catagory' : 'premium'
    },
    {
        'fname' : 'sweekrut',
        'lname' : 'joshi',
        'email' : 'sweekrutjoshi@gmail.com',
        'mnumber' : '8892658591',
        'catagory' : 'premium'
    },
    {
        'fname' : 'pradeepa',
        'lname' : 'Gopinath',
        'email' : 'pradeepagopinath19@gmail.com',
        'mnumber' : '8892658592',
        'catagory' : 'ultra premium'
    },
    {
        'fname' : 'abhishek',
        'lname' : 'Sp',
        'email' : 'frozentruth.abhi@gmail.com',
        'mnumber' : '8892658593',
        'catagory' : 'ultra premium'
    }

];*/





/*Club.collection.insertMany(data, function(err,r){
    assert.equal(null, err);
    assert.equal(data.length, r.insertedCount);
    
})*/
//console.log(data.length);
//{'catagory':1,'_id':0}

/*
var m = Club.find({}, {'catagory':1,'_id':0}, function (err, srchRes) {
    if (err) throw err;

    //console.log(srchRes);
});
*/

//console.log(m.fname);
module.exports = Club;