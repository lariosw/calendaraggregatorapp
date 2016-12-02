"use strict";angular.module("calendaraggregatorappApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current/:cityID",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/forecast/:cityID",{templateUrl:"views/forecast.html",controller:"ForecastCtrl",controllerAs:"forecast"}).otherwise({redirectTo:"/"})}]),angular.module("calendaraggregatorappApp").controller("MainCtrl",["$scope","citysearch","$localStorage",function(a,b,c){a.citiesFound=[],a.storage=c,a.showSavedCities=!1,a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location},a.storage=c,a.remove=function(b){a.storage.savedCities.splice(b,1)}}]),angular.module("calendaraggregatorappApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("calendaraggregatorappApp").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=4ef70d1fed3e3e197bc3ec9cee13e2b2",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("calendaraggregatorappApp").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=4ef70d1fed3e3e197bc3ec9cee13e2b2",{},{find:{method:"GET",params:{query:"Seattle,us"},isArray:!1}})}]),angular.module("calendaraggregatorappApp").controller("CurrentCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.cityID=b.cityID,a.alerts=[],a.currentWeather=c.query({cityID:b.cityID}),a.saveCity=function(b){var c={name:b.name,id:b.id};if(d.savedCities){for(var e=!0,f=0;f<d.savedCities.length;f++)d.savedCities[f].id===c.id&&(e=!1);e===!0?(d.savedCities.push(c),a.alerts.push({msg:"Success! City saved.",type:"success"})):a.alerts.push({msg:"City was already saved.",type:"warning"})}else d.savedCities=[c]},a.closeAlert=function(b){a.alerts.splice(b,1)}}]),angular.module("calendaraggregatorappApp").factory("forecast",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=4ef70d1fed3e3e197bc3ec9cee13e2b2",{},{query:{methods:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("calendaraggregatorappApp").controller("ForecastCtrl",["$scope","$routeParams","forecast",function(a,b,c){a.cityID=b.cityID,a.forecastData=c.query({cityID:b.cityID})}]),angular.module("calendaraggregatorappApp").controller("NavCtrl",["$scope","$route",function(a,b){a.tab=function(a){return b.current&&b.current.controller===a}}]),angular.module("calendaraggregatorappApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>This page tells you all about how cool we are. </p> <div ng-app ng-init="firstnum=1;secondnum=2"> <input type="number" min="0" ng-model="firstnum"> plus <input type="number" min="0" ng-model="secondnum"> equals <b>{{firstnum + secondnum}}</b> </div>'),a.put("views/current.html",'<!--Start Alert Html --> <script type="text/ng-template" id="alert.html"><div ng-transclude></div></script> <div uib-alert ng-repeat="alert in alerts" ng-class="\'alert-\' + (alert.type || \'warning\')" close="closeAlert($index)">{{alert.msg}}</div> <!-- End Alert Html --> <div class="header-current"> <h1>Current Weather for {{currentWeather.name}}</h1> </div> <div class="container-current"> <div class="weatherphoto"> <img src="/images/weatherimg.ca8c0fd1.jpg"> </div> <div class="weather-info"> <dl> <dt>Currently</dt> <dd>{{currentWeather.weather[0].main}}</dd> <dd>{{currentWeather.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{currentWeather.main.temp}} &deg;F</dd> <dt>Wind</dt> <dd>{{currentWeather.wind.speed}} mph at {{currentWeather.wind.deg}} &deg;</dd> <dt>Clouds</dt> <dd>{{currentWeather.clouds.all}}%</dd> </dl> </div> <div class="save-city"> <button class="btn btn-sm btn-primary" ng-click="saveCity(currentWeather)">Save City</button> </div> </div> <div class="bottom-navbtn"> <div class="return-button"> <a ng-href="#/" class="btn btn-lg btn-primary"> &lt; Return to Search</a> </div> <div class="16-day"> <a ng-href="#/forecast/{{cityID}}" class="btn btn-lg btn-primary">View 16-day Forecast</a> </div> </div>'),a.put("views/forecast.html",'<h1>16-day Forecast for {{forecastData.city.name}} {{forecastData.city.country}}</h1> <dl ng-repeat="prediction in forecastData.list" class="weather-forecast"> <dt>Forecast for {{prediction.dt*1000 | date: \'MMM dd, yyyy\'}}</dt> <dd>{{prediction.weather[0].main}}</dd> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> </dl> <p><a ng-href="#/current/{{cityID}}" class="btn btn-lg btn-primary">View Current Weather</a></p> <p><a ng-href="#/" class="btn btn-lg btn-primary">Return to Search</a></p>'),a.put("views/main.html",'<!-- CAROUSEL OF PHOTOS --> <div ng-app class="jumbotron" ng-controller="MainCtrl"> <div> <div class="search-wrapper"> <div uib-carousel active="active" interval="myInterval" no-wrap="noWrapSlides" class="main-carousel"> <div uib-slide index="0"> <img src="images/carousel/seattle.ae1687a9.jpeg" style="margin:auto"> <div class="carousel-caption"> <h4>Seattle, Wa</h4> <a href="/#/current/5809844">See Weather</a> </div> </div> <div uib-slide index="1"> <img src="images/carousel/ny.6dc1387f.jpeg" style="margin:auto"> <div class="carousel-caption"> <h4>New York, Ny</h4> <a href="/#/current/5128581">See Weather</a> </div> </div> <div uib-slide index="2"> <img src="images/carousel/la.ff644112.jpg" style="margin:auto"> <div class="carousel-caption"> <h4>Los Angeles, Ca</h4> <a href="/#/current/5368361">See Weather</a> </div> </div> <div uib-slide index="3"> <img src="images/carousel/lasvegas.ef8c3f8e.jpeg" style="margin:auto"> <div class="carousel-caption"> <h4>Las Vegas, Nv</h4> <a href="/#/current/5506956">See Weather</a> </div> </div> </div> <div class="search-inner"> <h1>How is the weather in...</h1> <div class="lead"> <div> <p> <label for="location">Location: <input id="location" type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findCities()">Find City</button> </p> </div> </div> </div> </div> </div> <div ng-if="storage.savedCities && storage.savedCities.length > 0"> <div class="saved-cities"> <span class="glyphicon glyphicon-plus" ng-click="showSavedCities = true" ng-show="showSavedCities == false"></span> <span class="glyphicon glyphicon-minus" ng-click="showSavedCities = false" ng-show="showSavedCities == true"></span> <span ng-show="showSavedCities == true">Hide Saved Cities</span> <span ng-show="showSavedCities == false">View Saved Cities</span> </div> <div class="results-container" ng-show="showSavedCities == true"> <ul> <li ng-repeat="city in storage.savedCities"> <a ng-href="#/current/{{city.id}}" class="btn btn-lg btn-primary">{{city.name}}</a> <button ng-click="remove($index)">Remove</button> </li> </ul> </div> </div> <div class="results-cnt" ng-if="searchQuery"> <p class="lead lead-found">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> </div> <div class="row results-wrapper"> <dl class="col-xs-4 found-cities" ng-repeat="city in citiesFound.list"> <div class="outer-box"> <div class="selected-city"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <img ng-src="http://openweathermap.org/img/w/{{city.weather[0].icon}}.png"> <dd><a ng-href="#/current/{{city.id}}" class="btn btn-lg btn-primary">View Weather</a></dd> </div> </div> </dl> </div> </div>')}]);