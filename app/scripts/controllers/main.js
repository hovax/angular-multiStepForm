'use strict';

/**
 * @ngdoc function
 * @name angularMsfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMsfApp
 */
angular.module('angularMsfApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
