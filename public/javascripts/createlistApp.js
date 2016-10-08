/**
 * Created by vgopali on 09-10-2016.
 */
var app = angular.module('myApp1', []);

app.controller('createlistctrllr',['$http', '$scope' , function ($http, $scope) {
    $scope.items = [];
    $scope.addItem = function () {
        console.log($scope.newItemName,$scope.newItemEmail)
        var fnameStr='initial',lnameStr='string';
        if($scope.newItemName.match(' ')){
            fnameStr = $scope.newItemName.split(' ')[0];
            console.log('fname is '+fnameStr)
            lnameStr = $scope.newItemName.split(' ')[1];
        }else{
            fnameStr = $scope.newItemName;
        }
        $scope.items.push({
            //id: $scope.items.length + 1,
            fname: fnameStr,
            lname: lnameStr,
            email: $scope.newItemEmail,
            catagory:$scope.newItemCatagory
        });
    }
}])