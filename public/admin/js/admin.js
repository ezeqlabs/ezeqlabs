var app = angular.module('appAdminEzeqlabs', ['ngRoute']);

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
.controller('Contatos', [function () {
  var self = this;
  self.listaContatos = contatos.todosContatos();
}])
