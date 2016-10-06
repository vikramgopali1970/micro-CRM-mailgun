/**
 * Created by vgopali on 07-10-2016.
 */
var app = angular.module('myApp', []);
app.controller('parentCtrll', ['$scope', '$http', function($scope,$http){
    $scope.test = 'vikram Gopali';
}]);