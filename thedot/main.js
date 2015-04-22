function FirstCtrl($scope){
	$scope.message = 'Hello';
}
function SecondCtrl($scope){
	$scope.message = 'Hello 2';
}

var App = angular.module('App', []).controller('FirstCtrl', ['$scope', FirstCtrl]).controller('SecondCtrl', ['$scope', SecondCtrl]);

