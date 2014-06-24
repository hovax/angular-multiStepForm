'use strict';

/**
 * @ngdoc overview
 * @name angularMsfApp
 * @description
 * # angularMsfApp
 *
 * Main module of the application.
 */
var app = angular.module('angularMsfApp', [
    'ngAnimate',
    'ui.router'
  ]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      // basic form (/form)
      .state('form', {
        url: '/form',
        templateUrl: 'views/form.html',
        controller: 'formCtrl'
      })

      // nested states
      .state('form.viewA', {
        url: '/viewA',
        templateUrl: 'views/form-viewA.html'
      })
      .state('form.viewB', {
        url: '/viewB',
        templateUrl: 'views/form-viewB.html'
      })
      .state('form.viewC', {
        url: '/viewC',
        templateUrl: 'views/form-viewC.html'
      });

    $urlRouterProvider.otherwise('/form/viewC');
  });

app.run(['$rootScope', '$location', function($rootScope, $location){
    $rootScope.$on('$stateChangeStart', function() {
      console.log('stateChangeStart');
    });
    $rootScope.$on('$stateChangeSuccess', function() {
      console.log('stateChangeSuccess');
    });
  }]);

app.controller('formCtrl', function($scope, $http){
  // save the choice data
    $scope.formData = {};

    $scope.processForm=function() {
      alert('Awesome! You have finished the questionaire!');
    };

  // read data from json
    $scope.NOW = {};
    $http.get('data.json').success(function(data) {
      $scope.db = data;
    })

    $scope.next = function (data) {
      $scope.db = eval("(" + data + ")").next;
      $scope.NOW.currentContent = eval("(" + data + ")").content;
      $scope.answer = eval("(" + data + ")").answer;
      console.log("next function runs");
    };

  });

app.directive('loadbar',['$rootScope', function($rootScope) {
  return {
    link: function(scope, element) {
      element.addClass('hide');

      $rootScope.$on('$stateChangeStart', function() {
        element.removeClass('hide');
        console.log('show the load bar');
      });

      $rootScope.$on('$stateChangeSuccess', function() {
        element.addClass('hide');
        console.log('remove the load bar');
      });
    }
  };
}]);
