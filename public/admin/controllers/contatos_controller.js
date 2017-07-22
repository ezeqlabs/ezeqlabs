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
