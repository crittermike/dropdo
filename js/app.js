/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', ['firebase']);
todomvc.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
});
