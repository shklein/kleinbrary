myApp.controller('ListController', ['$scope', '$http', function($scope, $http)
{

  getBooks();

  //get list
  function getBooks() {
    $http.get('/books')
      .then(function (response) {
        console.log('GET /books ', response.data);
        $scope.books = response.data;
      });
  }



  }]);
