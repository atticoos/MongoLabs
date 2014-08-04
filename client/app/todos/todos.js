'use strict';

angular.module('mongoDbApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('todos', {
        url: '/todos',
        templateUrl: 'app/todos/todos.html',
        controller: 'TodosCtrl'
      })
      .state('todo', {
        url: '/todos/:id',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoCtrl'
      });
  });
