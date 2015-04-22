var App = angular.module('App', []);

App.controller('FirstCtrl', FirstCtrl);
function FirstCtrl($scope){
  $scope.data = {message: "Hello"};
}