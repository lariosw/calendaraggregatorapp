'use strict';

/**
 * @ngdoc service
 * @name calendaraggregatorappApp.citysearch
 * @description
 * # citysearch
 * Factory in the calendaraggregatorappApp.
 */
angular.module('calendaraggregatorappApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...

  // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=4ef70d1fed3e3e197bc3ec9cee13e2b2', {}, {
      find: {
        method:'GET',
        params:{
          query: 'Seattle,us'
        },
        isArray:false

      }
    });
  });
