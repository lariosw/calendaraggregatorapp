'use strict';

/**
 * @ngdoc function
 * @name calendaraggregatorappApp.controller:CurrentCtrl
 * @description
 * # CurrentCtrl
 * Controller of the calendaraggregatorappApp
 */
angular.module('calendaraggregatorappApp')
  .controller('CurrentCtrl', function ($scope, $routeParams, current, $localStorage) {
    $scope.cityID = $routeParams.cityID;

    $scope.alerts = [];

    $scope.currentWeather = current.query({
      cityID: $routeParams.cityID
    });

    $scope.saveCity = function(city){
      var cityData = {
        'name': city.name,
        'id': city.id
      };
      if (!$localStorage.savedCities){
        $localStorage.savedCities = [cityData];
      } else {
        // We have already saved some cities.
        // Check to make sure we havne't already saved the current city.
        var save = true; // Initialize the save decision variable.
        // Use this loop to check if we've already saved the city.
        for (var i=0; i < $localStorage.savedCities.length; i++){
          if ($localStorage.savedCities[i].id === cityData.id) {
            // This is a duplicate, so don't save (variable set to false).
            save = false;
          }
        }
        if (save===true){
          $localStorage.savedCities.push(cityData);
          //display success alert
          $scope.alerts.push({msg: 'Success! City saved.', type: 'success'});
        } else {
          $scope.alerts.push({msg: 'City was already saved.', type: 'warning'});
        }
      }

    };


    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

  });


