app.controller('Dashboard',
  ["$scope", "currentAuth", "$location",
    function($scope, currentAuth, $location) {
      if( currentAuth == null ){
        $location.path('/')
      }
    }
  ]
);
