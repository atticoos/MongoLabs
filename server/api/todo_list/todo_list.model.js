'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoListSchema = new Schema({
  id: Schema.ObjectId,
  name: String,
  info: String,
  active: { type: Boolean, default: true },
  todos: [{
    name: String,
    completed: { type: Boolean, default: false }
  }]
});

module.exports = mongoose.model('TodoList', TodoListSchema);
