myApp.controller('AddController', ['$scope', '$http',  function($scope, $http)
{

$scope.user = ["Andrew", "Hannes", "Lyra", "Samantha"];
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



}]);
