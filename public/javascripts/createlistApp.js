/**
 * Created by vgopali on 09-10-2016.
 */
var app = angular.module('myApp1', []);
var i = 0;
app.controller('createlistctrllr',['$http', '$scope' , function ($http, $scope) {
    $scope.items = [];

    var promises = [];
    
    $scope.setKeyVal = function (key) {
        $scope.saveList  = key;
    }
    
    $scope.savelist = function(UserCatagory){

        console.log(UserCatagory);
        console.log('is it undefined',$scope.obj , $scope.obj[UserCatagory].length, typeof($scope.obj));
        $http.get('/createlist/createuserSave',{params: {userlist: $scope.obj[UserCatagory]}}).success(function(results){
            //console.log(results.catagoryusers);
            console.log(results.success);
        }).error(function(err){
            console.log('error has occured');
        });
    }
    $scope.addItem = function () {
        if($scope.newItemName.match(' '))
            var fnameStr=$scope.newItemName.substring(0,$scope.newItemName.indexOf(' ')),lnameStr=$scope.newItemName.substr($scope.newItemName.indexOf(' '),$scope.newItemName.length-1);
        else
            fnameStr = $scope.newItemName.trim();
        console.log(fnameStr,lnameStr);
        $scope.items.push({
            fname: fnameStr,
            lname: lnameStr,
            email: $scope.newItemEmail,
            catagory:$scope.newItemCatagory
        });

        $scope.obj = {};
        angular.forEach($scope.items, function(item, i){
           if(!$scope.obj[item.catagory.toLowerCase()])
               $scope.obj[item.catagory.toLowerCase()] = [];
            $scope.obj[item.catagory.toLowerCase()].push(item);
        });
        console.log($scope.obj);


    }
}])