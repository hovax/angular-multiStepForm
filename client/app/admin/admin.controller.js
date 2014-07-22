'use strict';

angular.module('angularMultiStepFormApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    $http.get('/api/users').success(function(users) {
      $scope.users = users;
    });

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $scope.deleteNode = function(data) {
        data.nodes = [];
      };
    $scope.addNode = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
      };

    $scope.tree = [{name: 'Node', nodes: []},{name: 'Node2', nodes: []}];

  });
