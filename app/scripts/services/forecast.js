'use strict';

/**
 * @ngdoc service
 * @name calendaraggregatorappApp.forecast
 * @description
 * # forecast
 * Factory in the calendaraggregatorappApp.
 */
angular.module('calendaraggregatorappApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=4ef70d1fed3e3e197bc3ec9cee13e2b2', {}, {
      query: {
        methods: 'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray: false
        }
      });
    });



