var app = angular.module('appAdminEzeqlabs', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'dashboard.html'
    })
    .when('/dashboard', {
      templateUrl: 'dashboard.html'
    })
    .when('/contatos', {
      templateUrl: 'contatos.html'
    })
    .otherwise({redirectTo: '/'})
}])
.controller('Contatos', ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var contatos = firebase.database().ref().child('contatos');
    $scope.contatos = $firebaseArray(contatos)
}])
