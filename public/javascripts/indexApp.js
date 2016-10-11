/**
 * Created by vgopali on 07-10-2016.
 */

var app = angular.module('myApp', []);

app.controller('parentCtrll', ['$scope', '$http', '$q', function($scope,$http,$q){

    $scope.lists = [];

    $scope.onDelete = function(deleteList){
        console.log(deleteList);

        $http.get('/deleteList',{params : {deletelist : deleteList}}).success(function(response){
            console.log('delete list was success',$scope.obj);
            delete $scope.obj[deleteList];
            setTimeout(function () {
                setMasonry();
            }, 100);
            console.log($scope.obj);

        }).error(function (error) {
            console.log('error in deleteing list');
        })
    }

    $scope.sendmail = function(mailCatagory){
        console.log('mail to be sent to ',mailCatagory);
        $http.post('/', {sendCatagory : mailCatagory}).success(function(result){
            console.log(result.success);
            console.log('mail sent');
        }).error(function(err){
            console.log('error')
        });
    }
    $scope.obj = {};
    var promises= [];
        $http.get('/getCatagories',{}).success(function(results){
            console.log(results.catagories);
            $scope.lists = results.catagories;
        }).error(function(err){
            console.log('error');
        }).then(function(){
        console.log('cheking here'+$scope.lists);
            angular.forEach($scope.lists, function(items, i){
               console.log('print aagu '+items)
               promises.push($http.get('/catatgoryUsers',{params: {catagory: items}}).success(function(results){
                   console.log('ned to modify this',results.catagoryusers);
                   if(!$scope.obj[items])
                       $scope.obj[items] = [];
                   $scope.obj[items] = results.catagoryusers;
                   console.log('is it modified',$scope.obj);
               }).error(function(err){
                   console.log('errorr');
               }))
            });
            Promise.all(promises).then(function(data){
                setMasonry();
            });
        });


}]);