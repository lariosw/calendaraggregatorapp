'use strict';

/**
 * @ngdoc function
 * @name calendaraggregatorappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendaraggregatorappApp
 */


angular.module('calendaraggregatorappApp')
  .controller('MainCtrl', function ($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };

    $scope.storage = $localStorage;

  });


