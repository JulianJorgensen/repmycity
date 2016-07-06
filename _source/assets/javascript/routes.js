// ROUTES
var homePageUrl = '{{ "home" | asset_url | json }}';
homePageUrl = 'https:' + homePageUrl.replace(/"/g, '');

var shopPageUrl = '{{ "shop" | asset_url | json }}';
shopPageUrl = 'https:' + shopPageUrl.replace(/"/g, '');

var mycityPageUrl = '{{ "mycity" | asset_url | json }}';
mycityPageUrl = 'https:' + mycityPageUrl.replace(/"/g, '');

var categoriesPageUrl = '{{ "categories" | asset_url | json }}';
categoriesPageUrl = 'https:' + categoriesPageUrl.replace(/"/g, '');

var uploadPageUrl = '{{ "upload" | asset_url | json }}';
uploadPageUrl = 'https:' + uploadPageUrl.replace(/"/g, '');

// var aboutPageUrl = '{{ "about" | asset_url | json }}';
// aboutPageUrl = 'https:' + aboutPageUrl.replace(/"/g, '');


rmcApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
      controller: 'homeController',
      templateUrl: homePageUrl
    })

    .when('/shop', {
      controller: 'shopController',
      templateUrl: shopPageUrl
    })

    .when('/my-city', {
      controller: 'mycityController',
      templateUrl: mycityPageUrl
    })

    .when('/categories', {
      controller: 'categoriesController',
      templateUrl: categoriesPageUrl
    })

    .when('/upload', {
      controller: 'uploadController',
      templateUrl: uploadPageUrl
    })

});
