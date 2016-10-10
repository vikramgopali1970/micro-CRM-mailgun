/**
 * Created by vgopali on 09-10-2016.
 */
var app = angular.module('myApp1', []);
var i = 0;
app.controller('createlistctrllr',['$http', '$scope' , '$q', function ($http, $scope, $q) {
    $scope.items = [];

    var promises = [];

    $scope.savelist = function(UserCatagory){

        console.log(UserCatagory);
        console.log($scope.obj[UserCatagory]);
        $http.get('/createlist/createuserSave',{params: {userlist: $scope.obj[UserCatagory]}}).success(function(results){
            //console.log(results.catagoryusers);
            console.log(results.success);
            //$scope.userlist.push({'catagory':items,'users':results.catagoryusers});

        }).error(function(err){
            console.log('error has occured');
        });
    }
    $scope.addItem = function () {
        var fnameStr=$scope.newItemName.substring(0,$scope.newItemName.indexOf(' ')),lnameStr=$scope.newItemName.substr($scope.newItemName.indexOf(' '),$scope.newItemName.length-1);
        console.log(fnameStr,lnameStr);
        $scope.items.push({
            fname: fnameStr.trim(),
            lname: lnameStr.trim()  ,
            email: $scope.newItemEmail,
            catagory:$scope.newItemCatagory
        });

        $scope.obj = {};
        angular.forEach($scope.items, function(item, i){
           if(!$scope.obj[item.catagory])
               $scope.obj[item.catagory] = [];
            $scope.obj[item.catagory].push(item);
        });
        console.log($scope.obj);


    }
}])