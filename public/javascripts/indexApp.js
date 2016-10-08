/**
 * Created by vgopali on 07-10-2016.
 */

var app = angular.module('myApp', []);

app.controller('parentCtrll', ['$scope', '$http', '$q', function($scope,$http,$q){

    $scope.sendmail = function(){

        $http.post('/', {}).success(function(result){
            console.success();
        }).error(function(err){
            console.log('error')
        });
        /*var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.mailgun.net/v3/sandbox224fba4d033a4162906e00f11ce13aed.mailgun.org/messages",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "authorization": "Basic YXBpOmtleS00NDFjM2JiNDdlMWFmMzUxOGRhODgxNTRjZmUzNTI3ZA==",
                "cache-control": "no-cache",
                "postman-token": "59d955cc-d07f-7b83-c8fd-fba851e53a4f"
            },
            "data": {
                "to": "vikramgopali.93@gmail.com",
                "from": "Excited User <mailgun@sandbox224fba4d033a4162906e00f11ce13aed.mailgun.org>",
                "text": "this is a testing mail from mailgun server",
                "subject": "testing mail"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });*/
    }

    $scope.lists = [];
    $scope.userlist = [];
    var promises= [];
        $http.get('/getCatagories',{}).success(function(results){
            console.log(results.catagories);
            $scope.lists = results.catagories;
        }).error(function(err){
            console.log('error');
        }).then(function(){
        console.log('cheking here'+$scope.lists);
            angular.forEach($scope.lists, function(items){
               console.log('print aagu '+items)
               promises.push($http.get('/catatgoryUsers',{params: {catagory: items}}).success(function(results){
                   console.log(results.catagoryusers);
                   $scope.userlist.push({'catagory':items,'users':results.catagoryusers});

               }).error(function(err){
                   console.log('errorr');
               }))
            });
            $q.all(promises).then(function(data){
                //Never gets call
                //console.log($scope.userlist)
            });
        });



    /*$http.get('/.json',{}).success(function (result) {
        $scope.lists = [];
        $scope.free = [];
        $scope.premium = [];
        $scope.ultrapremium = [];
        angular.forEach(result.premium, function(item){
            $scope.lists.push(item);
        });

        console.log(Object.keys(result).length);
        console.log(result.free.length);
        console.log(result.premium.length);
        console.log(result.ultrapremium.length);
        angular.forEach(result.free, function(item1){
            $scope.free.push(item1);
        });
        angular.forEach(result.premium, function(item2){
            $scope.premium.push(item2);
        });
        angular.forEach(result.ultrapremium, function(item3){
            $scope.ultrapremium.push(item3);
        })
    }).error(function (err) {
        console.log('error');
    });*/
}]);