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
      templateUrl: "login.html"
    })
    .when('/dashboard', {
      controller: "Dashboard",
      templateUrl: "dashboard.html",
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })
    .when('/contatos', {
      controller: "Contatos",
      templateUrl: "contatos.html",
      resolve: {
        "currentAuth": ["Auth", function(Auth) {
          return Auth.$requireSignIn();
        }]
      }
    })
    .otherwise({redirectTo: '/'})
}]);

app.controller('Login',
  ["$scope", "$location", "$firebaseAuth", "Auth",
    function($scope, $location, $firebaseAuth, Auth){
      // if(currentAuth != null){
      //   $location.path("/dashboard");
      // }

      var self = this;
      $scope.authObj = $firebaseAuth();

      self.submit = function(){
        var email = self.email;
        var senha = self.senha;

        Auth.$signInWithEmailAndPassword(email, senha)
          .then(function(firebaseUser) {
            $location.path("/dashboard");
          }).catch(function(error) {
            console.error("Authentication failed:", error);
          });
      }
    }
  ]
);

app.controller('Dashboard',
  ["$scope", "currentAuth", "$location",
    function($scope, currentAuth, $location) {
      if( currentAuth == null ){
        $location.path('/')
      }
    }
  ]
);

app.controller('Contatos',
  ["$scope", "$firebaseArray", "currentAuth", "$location",
    function($scope, $firebaseArray, currentAuth, $location) {
      if( currentAuth == null ){
        $location.path('/')
      }

      var contatos = firebase.database().ref().child('contatos');
      $scope.contatos = $firebaseArray(contatos);
    }
  ]
);

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
