'use strict';

angular.module('mongoDbApp')
  .controller('TodoCtrl', function ($scope, $http, $stateParams) {
    $scope.message = 'Hello';
    $scope.todo = {};
    $http.get('/api/todo_lists/' + $stateParams.id).success(function (resp) {
      $scope.todo = resp;
    });


    $scope.complete = function (index) {
      $scope.todo.todos[index].completed = !$scope.todo.todos[index].completed;
      $http.put('/api/todo_lists/' + $stateParams.id, $scope.todo).success(function (resp) {
        $scope.todo = resp;
      });
    }

    $scope.addTodoItem = function (item) {
      var todoItem = {
        name: item,
        completed: false
      };
      $scope.todo.todos.push(todoItem);
      $http.put('/api/todo_lists/' + $stateParams.id, $scope.todo).success(function (resp) {
        $scope.todo = resp;
      });
    }
  });
