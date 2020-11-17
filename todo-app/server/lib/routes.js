const express = require('express');
const tasks = require('./controllers/tasks');
let routes = express.Router();

routes.route('/tasks')
  .get(tasks.all)
  .put(tasks.add)

routes.route('/tasks/:name')
  .get(tasks.byName)

  .delete(tasks.delete)

routes.route('tasks/:urgency')
  .get(tasks.byUrgency)

module.exports = routes;
