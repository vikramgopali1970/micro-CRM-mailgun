/**
 * Created by vgopali on 07-10-2016.
 */

var app = angular.module('myApp', []);

app.controller('parentCtrll', ['$scope', '$http', '$q', function($scope,$http,$q){

    $scope.lists = [];
    $scope.userlist = [];

    $scope.sendmail = function(mailCatagory){
        console.log('mail to be sent to ',mailCatagory);
        $http.post('/', {sendCatagory : mailCatagory}).success(function(result){
            console.log(result.success);
            console.log('mail sent');
        }).error(function(err){
            console.log('error')
        });
    }

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


}]);