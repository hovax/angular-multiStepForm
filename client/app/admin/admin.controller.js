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



    $scope.saveServer = function() {
      $http.post('/api/questionTrees',$scope.tree).success(function(data) {
        $scope.tree = {};
      });
    };

    $scope.questionValueTop = function(data) {
      data.question=this.question;
    };

    $scope.tipValueTop = function(data) {
      data.tip=this.tip;
    };

    $scope.addTop = function(data) {
        data.options.push({content:''});
      };

    $scope.deleteTop = function(data) {
        data.options = [];
      };

    $scope.questionValue = function(data) {
      data.next.question=this.question;
      console.log(this.question);
      console.log(data.next.question);
    };

    $scope.tipValue = function(data) {
      data.next.tip=this.tip;
    };

    $scope.contentValue = function(data) {
      data.content=this.content;
    };

    $scope.answerValue = function(data) {
      data.answer=this.answer;
    };

    $scope.addAnswer = function(data) {
      this.showAnswer=true;
      this.showNext=false;
      delete data.next;
    };

    $scope.addNext = function(data) {
      this.showNext=true;
      this.showAnswer=false;
      data.next = {};
      data.next.options = [];
      delete data.answer;
    };

    $scope.delete = function(data) {
        data.next.options = [];
      };

    $scope.save = function(data) {
        data.content = this.content;
        // data.question = this.question;
        // data.tip = this.tip;
      };
    $scope.saveTop = function(data) {
        data.question = this.question;
        data.tip = this.tip;
      };

    $scope.add = function(data) {
        data.next.options.push({content:''});
      };

    $scope.refresh = function() {
        this.content='';
        this.question='';
        this.tip='';
        this.showAnswer=false;
        this.showNext=false;
      };

    $scope.tree = [{question: '', tip: '', options: []}];

  });
