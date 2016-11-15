'use strict';

/**
 * @ngdoc function
 * @name calendaraggregatorappApp.controller:ForecastCtrl
 * @description
 * # ForecastCtrl
 * Controller of the calendaraggregatorappApp
 */
angular.module('calendaraggregatorappApp')
  .controller('ForecastCtrl', function ($scope, $routeParams, forecast) {
    $scope.cityID = $routeParams.cityID;

    $scope.forecastData = forecast.query({
      cityID: $routeParams.cityID
    });
  });

