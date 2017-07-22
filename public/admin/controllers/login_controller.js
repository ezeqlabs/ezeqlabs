app.controller('Login',
  ["$scope", "$location", "Auth",
    function($scope, $location, Auth){
      if( Auth.$getAuth() != null ){
        $location.path('/dashboard')
      }
      
      var self = this;

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
