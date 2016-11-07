'use strict';

/**
 * @ngdoc function
 * @name calendaraggregatorappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendaraggregatorappApp
 */


angular.module('calendaraggregatorappApp')
  .controller('MainCtrl', function ($scope, current) {
    $scope.current = current.query();

    $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
  });