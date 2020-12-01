const express = require('express');
const tasks = require('./controllers/tasks');
const profiles = require('./controllers/profiles');
const timer = require('./controllers/timers');
let routes = express.Router();

routes.route('/tasks')
  .get(tasks.all)
  .put(tasks.add)

routes.route('/tasks/:name')
  .get(tasks.byName)
  .delete(tasks.delete)

routes.route('/tasks/:urgency')
  .get(tasks.byUrgency)

routes.route('/profiles')
  .put(profiles.addProfile)

routes.route('/profiles/:userName')
  .get(profiles.byName)


// routes.route('/timer')
//   .get(timer.time)
//
// routes.route('timer/:stopped')
//   .patch(timer.stop)

module.exports = routes;
