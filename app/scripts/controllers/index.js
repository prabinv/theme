'use strict';

module.exports = [
  '$scope',
  '$http',
  'api',

  function ($scope, $http, api) {

    $scope.global = {
      cart: {
        itemCount: 10
      }
    };

    // Cart
    api.cart.get().then(function (response) {
        $scope.cart = response.data;
        // TODO: REMOVE
        console.log('Cart: ', response.data);
      }, function (error) {
        console.log('Error: ', error);
      });

    // Categories
    api.categories.get().then(function (response) {
        $scope.categories = response.data;
        // TODO: REMOVE
        console.log('Categories: ', response.data);
      }, function (error) {
        console.log('Error: ' + error);
      });

    // Config
    api.config.get().then(function (response) {
        $scope.config = response.data;
        // TODO: REMOVE
        console.log('Config: ', response.data);
      }, function (error) {
        console.log('Error: ', error);
      });

    $scope.htmlReady();
  }
];
