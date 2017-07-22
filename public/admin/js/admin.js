var app = angular.module('appAdminEzeqlabs', ['ngRoute', 'firebase']);

app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $location.path("/");
    }
  });
}]);

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

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
