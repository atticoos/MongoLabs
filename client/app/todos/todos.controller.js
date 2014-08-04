'use strict';

angular.module('mongoDbApp')
  .controller('TodosCtrl', function ($scope, $http) {
    $scope.todos = [];
    $http.get('/api/todo_lists').success(function (resp) {
      $scope.todos = resp;
    });
  });
