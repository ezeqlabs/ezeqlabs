app.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .when('/', {
      controller: "Login",
      templateUrl: "views/login.html"
    })
    .when('/dashboard', {
      controller: "Dashboard",
      templateUrl: "views/dashboard.html",
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })
    .when('/contatos', {
      controller: "Contatos",
      templateUrl: "views/contatos.html",
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })
    .otherwise({redirectTo: '/'})
}]);
