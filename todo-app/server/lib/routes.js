const express = require('express');
const tasks = require('./controllers/tasks');
const profiles = require('./controllers/profiles');
let routes = express.Router();

routes.route('/tasks')
  .get(tasks.all)
  .post(tasks.add)

routes.route('/tasks/:name')
  //.get(tasks.byName)
  .delete(tasks.delete)

// routes.route('/tasks/:urgency')
//   .get(tasks.byUrgency)

routes.route('/tasks/byUrgency')
  .get(tasks.sortByUrgency)

routes.route('/tasks/byDate')
  .get(tasks.sortByDate)

// Routes for User Login
routes.route('/profiles')
  .post(profiles.addProfile)
  .get(profiles.all)

routes.route('/profiles/:userName')
  .get(profiles.byName)
  .delete(profiles.delete)

routes.route('/profiles/login')
  .post(profiles.signIn)

module.exports = routes;
