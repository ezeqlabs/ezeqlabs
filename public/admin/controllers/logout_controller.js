app.controller('Logout',
  ["$scope", "$location", "Auth",
    function($scope, $location, Auth){
      Auth.$signOut();
      location.reload();
      $location.path('/');
    }
  ]
);
