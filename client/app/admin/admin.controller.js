'use strict';

angular.module('angularMultiStepFormApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });

    $scope.deleteUser = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.delete = function(data) {
        data.options = [];
      };

    $scope.save = function(data) {
        data.content = this.content;
        data.question = this.question;
        data.tip = this.tip;
      };
    $scope.saveTop = function(data) {
        data.question = this.question;
        data.tip = this.tip;
      };
    $scope.add = function(data) {
        data.options.push({content:'',question:'', tip:'', options: []});
      };
    $scope.refresh = function(data) {
        console.log(data);
        this.content='';
        this.question='';
        this.tip='';
      };

    $scope.tree = [{question: '', tip: '', options: []}];

  });
