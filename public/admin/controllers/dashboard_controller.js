app.controller('Dashboard',
  ["$scope", "$location", "Auth",
    function($scope, $location, Auth) {
      if( Auth.$getAuth() == null ){
        $location.path('/')
      }
    }
  ]
);
