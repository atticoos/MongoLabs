'use strict';

var _ = require('lodash');
var TodoList = require('./todo_list.model');

// Get list of todo_lists
exports.index = function(req, res) {
  TodoList.find(function (err, todo_lists) {
    if(err) { return handleError(res, err); }
    return res.json(200, todo_lists);
  });
};

// Get a single todo_list
exports.show = function(req, res) {
  TodoList.findById(req.params.id, function (err, todo_list) {
    if(err) { return handleError(res, err); }
    if(!todo_list) { return res.send(404); }
    return res.json(todo_list);
  });
};

// Creates a new todo_list in the DB.
exports.create = function(req, res) {
  TodoList.create(req.body, function(err, todo_list) {
    if(err) { return handleError(res, err); }
    return res.json(201, todo_list);
  });
};

// Updates an existing todo_list in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  if (req.body.todos) {
    for (var i = 0; i < req.body.todos.length; i++) {
      delete req.body.todos[i]._id;
    }
  }
  TodoList.findById(req.params.id, function (err, todo_list) {
    if (err) { return handleError(res, err); }
    if(!todo_list) { return res.send(404); }
    var updated = _.merge(todo_list, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, todo_list);
    });
  });
};

// Deletes a todo_list from the DB.
exports.destroy = function(req, res) {
  TodoList.findById(req.params.id, function (err, todo_list) {
    if(err) { return handleError(res, err); }
    if(!todo_list) { return res.send(404); }
    todo_list.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
