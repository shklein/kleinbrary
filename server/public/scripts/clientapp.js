var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/submit', {
      templateUrl: '/views/templates/submit.html',
      controller: "AddController"
    })
    .when('/list', {
      templateUrl: '/views/templates/list.html',
      controller: "ListController"
    })
    .when('/wishlist', {
      templateUrl: '/views/search.html',
      controller: "WishController"
    })
    .otherwise({
      redirectTo: 'submit'
    })

}
]);
