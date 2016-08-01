myApp.controller('AddController', ['$scope', '$http',  function($scope, $http)
{

  getUsers();

$scope.users = [];
$scope.currentBk = {};
$scope.message = false;

$scope.submitCurrentBk = function () {
  $scope.currentBk.user = $scope.selectedUser;
    var data = $scope.currentBk;

    $http.post('/books', data).then(function(response) {
      if(response.status == 201) {
        console.log('Book saved.');
        $scope.message = true;
        $scope.currentBk = {};
        $scope.selectedUser = 0;
      } else {
        console.log('Error:', response.data);
      }
    });
    };

    function getUsers () {
      $http.get('/users')
        .then(function (response) {
          response.data.forEach(function (user) {
            $scope.username = user.username;
            $scope.user_id = user.user_id;
            $scope.users.push(user);
          })
          console.log($scope.users);
        })

  };



}]);
