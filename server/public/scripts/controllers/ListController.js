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

//remove returned item
$scope.returnBk = function(book) {
      var barcode = book.barcode;
      var returnBook = confirm('Are you sure you returned ' + book.title + '?');
      if (returnBook === true){
        $http.delete('/books/delete/' + barcode)
          .then(function (response) {
            getBooks();
            return;
          });
        } else {
          return;
        }
    };
  


  }]);
