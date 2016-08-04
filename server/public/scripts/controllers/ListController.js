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
          book.due_soon = false;

          if (moment().isAfter(book.due_date)) {
              book.due_soon = false;
              book.overdue = true;
            } else if (moment(book.due_date).diff(moment(), 'days') <= 3) {
              book.due_soon = true;
            } else {
              book.overdue = false;
              book.due_soon = false;
            }
        });
        $scope.books = response.data;
      });
  }




//remove returned item
$scope.returnBk = function(book) {
      var id = book.id;
      var returnBook = confirm('Are you sure you returned ' + book.title + '?');
      if (returnBook === true){
        $http.delete('/books/delete/' + id)
          .then(function (response) {
            getBooks();
            return;
          });
        } else {
          return;
        }
    };



  }]);
