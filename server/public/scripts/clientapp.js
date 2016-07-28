var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/list', {
      templateUrl: '/views/submit.html',
      controller: "ListController"
    })
    .when('/wishlist', {
      templateUrl: '/views/search.html',
      controller: "WishController"
    })
    .otherwise({
      redirectTo: 'list'
    })

}
]);
