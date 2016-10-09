/**
 * Created by vgopali on 09-10-2016.
 */
var app = angular.module('myApp1', []);

app.controller('createlistctrllr',['$http', '$scope' , function ($http, $scope) {
    $scope.items = [];
    $scope.catagoryArry = [];
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
            fname: fnameStr,
            lname: lnameStr,
            email: $scope.newItemEmail,
            catagory:$scope.newItemCatagory
        });
        var flag = false;
        if($scope.catagoryArry.length == 0){
            $scope.catagoryArry.push({'catagory' : $scope.newItemCatagory, 'usersArray':$scope.items});
        }else{
            /*for(var i=0;i<$scope.catagoryArry.length;i++){
                if($scope.catagoryArry.catagory == $scope.newItemCatagory){
                    flag = true;
                    break;
                }
            }*/
            angular.forEach($scope.catagoryArry, function(item){
                if(item.catagory == $scope.newItemCatagory){
                    flag = true;
                    return;
                }
            })
            if(!flag){
                $scope.catagoryArry.push({'catagory' : $scope.newItemCatagory, 'usersArray':$scope.items});
            }
        }



    }
}])