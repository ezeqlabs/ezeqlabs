app.controller('Contatos',
  ["$scope", "$firebaseArray", "$location", "Auth",
    function($scope, $firebaseArray, $location, Auth) {
      if( Auth.$getAuth() == null ){
        $location.path('/')
      }

      var contatos = firebase.database().ref().child('contatos');
      var contatosFirebase = $firebaseArray(contatos);
      $scope.contatos = contatosFirebase;

      var quantidadeContatos = 0;
      contatosFirebase.$loaded()
        .then(function(){
            angular.forEach(contatosFirebase, function(contato) {
                quantidadeContatos += 1;
            })
            $scope.temContatos = function(){
              return quantidadeContatos > 0;
            };
        });


    }
  ]
);
