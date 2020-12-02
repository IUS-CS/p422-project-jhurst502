const express = require('express');
const tasks = require('./controllers/tasks');
const profiles = require('./controllers/profiles');
let routes = express.Router();

routes.route('/tasks')
  .get(tasks.all)
  .post(tasks.add)

routes.route('/tasks/:name')
  .get(tasks.byName)
  .delete(tasks.delete)

routes.route('/tasks/:urgency')
  .get(tasks.byUrgency)

routes.route('/profiles')
  .post(profiles.addProfile)

routes.route('/profiles/:userName')
  .get(profiles.byName)

routes.route('/profiles/login')
  .post(profiles.signIn)

module.exports = routes;
