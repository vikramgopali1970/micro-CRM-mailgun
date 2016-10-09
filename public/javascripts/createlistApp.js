/**
 * Created by vgopali on 09-10-2016.
 */
var app = angular.module('myApp1', []);
var i = 0;
app.controller('createlistctrllr',['$http', '$scope' , '$q', function ($http, $scope, $q) {
    $scope.items = [];
    var map = new Object();
    $scope.catagoryArry = [];
    var promises = [];

    $scope.savelist = function(UserCatagory){

        console.log(UserCatagory);
        /*$http.get('/createuserSave', {params:{catagory:UserCatagory}}).success(function(response){
            console.log("yuppie success")
        }).error(function (err) {
            console.log('error');
        })*/

            /*promises.push(*/
                console.log(map);
                $http.get('/createlist/createuserSave',{params: {catagory: UserCatagory, userlist: $scope.items}}).success(function(results){
                    //console.log(results.catagoryusers);
                    console.log(results.success);
                    //$scope.userlist.push({'catagory':items,'users':results.catagoryusers});

                }).error(function(err){
                    console.log('error has occured');
                });
            /*)*/
       /* $q.all(promises).then(function(data){
            //Never gets call
            //console.log($scope.userlist)
        });*/
    }
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
        map[i++] = $scope.items[$scope.items.length-1];
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
            console.log($scope.items)
        }



    }
}])