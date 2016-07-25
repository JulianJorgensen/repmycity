// CONTROLLERS
rmcApp.controller('homeController', ['$scope', '$http', function($scope, $http) {

  console.log('home controller');
  $http.get('/products.json').success(function (data) {
    $scope.products = data.products;
    console.log(data);
  });

}]);
