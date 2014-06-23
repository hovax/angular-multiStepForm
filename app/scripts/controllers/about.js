'use strict';

/**
 * @ngdoc function
 * @name angularMsfApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMsfApp
 */
angular.module('angularMsfApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
