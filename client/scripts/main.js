require('angular');
require('angular-route');
require('angular-resource');
require('angular-animate');
var views = 'views/';

angular.module('vikingApp', ['ngRoute', 'ngResource', 'ngAnimate', 'basic']);

var app = angular.module('basic', []);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: views + 'front.html',
      controller:  'frontController'
    });
  
  // $locationProvider.html5Mode(true);
}]);

app.controller('frontController', ['$scope', '$resource', '$http', '$routeParams', '$route', '$q', '$location', function($scope, $resource, $http, $routeParams, $route, $q, $location) {
  $scope.line1 = "Lo there, do I see my father,";
  $scope.line2 = "Lo there, do I see my mother, my sisters and brothers,";
  $scope.line3 = "Lo there, do I see the line of my people, back to the beginning,";
  $scope.line4 = "Lo, they do call to me, they bid me take my place among them,";
  $scope.line5 = "In the halls of Valhalla where the brave may code forever.";

}]);
