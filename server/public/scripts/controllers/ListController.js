myApp.controller('ListController', ['$scope', '$http', function($scope, $http)
{


  getBooks();

  //get list
  function getBooks() {
    $http.get('/books')
      .then(function (response) {
        response.data.forEach(function (book) {
          book.due_date = new Date(book.due_date);
          book.overdue = false;
          if (moment().isAfter(book.due_date)) {
            console.log(book.title + " is overdue!");
              book.overdue = true;
            }
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
