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
