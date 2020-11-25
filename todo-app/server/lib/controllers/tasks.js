const Task = require('../models/task');


module.exports = {
  all: function (req, res) {
    Task.find().exec((err, tasks) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.json(tasks);
    });
  },
  byName: function (req, res) {
    const name = req.params.name;
    Task.findOne().byName(name).exec((err, task) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.json(task);
    });
  },
  byUrgency: function (req, res) {
    const urgency = req.params.name;
    Task.find().byUrgency(urgency).exec((err, tasks) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.json(tasks);
    });
  },
  add: function (req, res) {
    let newTaskInfo = req.body;

    let newTask = new Task(newTaskInfo);
    newTask.save()
      .then(() => {
        res.status(200);
        res.json(newTask.valueOf());
      })
      .catch((err) => {
        res.status(400);
        return res.json(err);
      });
  },
  delete: function (req, res) {
    Task.deleteOne().where( {name: req.params.name}).exec()
      .then((tasks) => {
        res.status(200);
        res.json(tasks);
      })
      .catch((err) => {
        res.status(404);
        return res.json(err);
      });
  }
}
