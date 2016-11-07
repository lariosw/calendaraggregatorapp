'use strict';

/**
 * @ngdoc service
 * @name calendaraggregatorappApp.current
 * @description
 * # current
 * Factory in the calendaraggregatorappApp.
 */

angular.module('calendaraggregatorappApp')
  .factory('current', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=4ef70d1fed3e3e197bc3ec9cee13e2b2', {}, {
      query: {
        method:'GET',
        params:{
          location: 'Seattle,us'
        },
        isArray:false
          
      }
    });
  });