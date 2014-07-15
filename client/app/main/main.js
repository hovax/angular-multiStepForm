'use strict';

var app = angular.module('angularMultiStepFormApp');


app.config(function ($stateProvider) {
    $stateProvider

      // basic form
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'mainCtrl'
      })

      // nested states
      .state('main.A', {
        url: '/viewA',
        templateUrl: 'app/main/viewA.html'
      })
      .state('main.B', {
        url: '/viewB',
        templateUrl: 'app/main/viewB.html'
      });

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

app.controller('mainCtrl', function($scope, $http, $state, $rootScope){
  // save the choice data
    $rootScope.formData = {};

    $scope.$state = $state;

    // $rootScope.db = db;
  // read data from json
    $http.get('data.json').success(function(data) {
      $rootScope.db = data;
    });

    // $.getJSON('data.json',function(data) {
    //   $rootScope.db=data;
    // });

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
