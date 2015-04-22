function FirstCtrl($scope, Data){
	$scope.message = Data[0];
}
function SecondCtrl($scope, Data){
	$scope.message = Data[1];
}

var App = angular.module('App', []);
App.controller('FirstCtrl', ['$scope', 'Data', FirstCtrl]);
App.controller('SecondCtrl', ['$scope', 'Data', SecondCtrl]);
App.factory('Data', function(){
	return ['Hello One', 'Hello Two'];
});
App.filter('reverse', function(){
	return function(input){
		var reverseString = '';
		for(var i=input.length;i>=0;i--){
			reverseString += input.charAt(i);
		}
		return reverseString;
	};
});

