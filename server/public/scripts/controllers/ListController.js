myApp.controller('ListController', ['$scope', '$http', function($scope, $http)
{

  getBooks();

  //get list
  function getBooks() {
    $http.get('/books')
      .then(function (response) {
        response.data.forEach(function (book) {
          book.due_date = new Date(book.due_date);
        });
        $scope.books = response.data;
      });
  }



  }]);
