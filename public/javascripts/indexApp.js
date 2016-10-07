/**
 * Created by vgopali on 07-10-2016.
 */

var app = angular.module('myApp', []);

/*app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl : 'index.html'
        });
});*/

app.controller('parentCtrll', ['$scope', '$http', function($scope,$http){
    $http.get('/.json',{}).success(function (result) {
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
    });
}]);