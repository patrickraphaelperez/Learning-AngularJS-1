var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){

	$scope.author = {
		'name':'Patrick',
		'title':'College Graduate',
		'company':'Perez'
	}

});