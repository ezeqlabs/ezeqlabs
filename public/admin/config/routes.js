app.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .when('/', {
      controller: "Login",
      templateUrl: "views/login.html"
    })
    .when('/dashboard', {
      controller: "Dashboard",
      templateUrl: "views/dashboard.html"
    })
    .when('/contatos', {
      controller: "Contatos",
      templateUrl: "views/contatos.html"
    })
    .otherwise({redirectTo: '/'})
}]);
