'use strict';

/**
 * @ngdoc overview
 * @name angularMsfApp
 * @description
 * # angularMsfApp
 *
 * Main module of the application.
 */
angular
  .module('angularMsfApp', [
    'ngAnimate',
    'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      // basic form (/form)
      .state('form', {
        url: '/form',
        templateUrl: 'views/form.html',
        controller: 'formCtrl'
      })

      // nested states
      .state('form.profile', {
        url: '/profile',
        templateUrl: 'views/form-profile.html'
      })
      .state('form.interests', {
        url: '/interests',
        templateUrl: 'views/form-interests.html'
      })
      .state('form.payment', {
        url: '/payment',
        templateUrl: 'views/form-payment.html'
      });

    $urlRouterProvider.otherwise('/form/profile');
})

  .controller('formCtrl', function($scope){
    $scope.formData = {};

    $scope.processForm=function() {
      alert('awesome!');
    };
  });
