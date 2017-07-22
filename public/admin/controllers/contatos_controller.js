app.controller('Contatos',
  ["$scope", "$firebaseArray", "$location", "Auth",
    function($scope, $firebaseArray, $location, Auth) {
      if( Auth.$getAuth() == null ){
        $location.path('/')
      }

      var contatos = firebase.database().ref().child('contatos');
      $scope.contatos = $firebaseArray(contatos);
    }
  ]
);
