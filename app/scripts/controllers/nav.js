'use strict';

/**
 * @ngdoc function
 * @name calendaraggregatorappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendaraggregatorappApp
 */


angular.module('calendaraggregatorappApp')
  .controller('NavCtrl', function ($scope, $route) {

    $scope.tab = function(route) {
      return $route.current && $route.current.controller === route;
    };

  });

