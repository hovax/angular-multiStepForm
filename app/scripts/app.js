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
      .state('form.A', {
        url: '/viewA',
        templateUrl: 'views/form-viewA.html'
      })
      .state('form.B', {
        url: '/viewB',
        templateUrl: 'views/form-viewB.html'
      })
      .state('form.C', {
        url: '/viewC',
        templateUrl: 'views/form-viewC.html'
      });

    $urlRouterProvider.otherwise('/form/viewA');
  });

app.run(['$rootScope', function($rootScope){
    $rootScope.$on('$stateChangeStart', function() {
      console.log('stateChangeStart');
      $rootScope.db = $rootScope.updatedb;
      console.log('db update');
      // $roorScope.answer = $rootScope.updateanswer;
    });
    $rootScope.$on('$stateChangeSuccess', function() {
      console.log('stateChangeSuccess');
    });
  }]);

app.controller('formCtrl', function($scope, $http, $state, $rootScope){
  // save the choice data
    $rootScope.formData = {};

    $scope.$state = $state;

  // read data from json
    $http.get('data.json').success(function(data) {
      $rootScope.db = data;
    })

    $scope.next = function (data) {
        $rootScope.olddb = $rootScope.db;
        // $rootScope.answer = $rootScope.answer;
        $rootScope.updatedb = eval("(" + data + ")").next;
        $rootScope.answer = eval("(" + data + ")").answer;
        console.log("next function runs");
      };

    $scope.prev = function () {
        $rootScope.updatedb = $rootScope.olddb;
        console.log("prev function runs");
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
