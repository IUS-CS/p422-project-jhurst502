let express = require('express');
let router = express.Router();
let task = require('./models/task');

router.route('/tasks')
    .get(function (req, res){
        let options = {};

        if (req.query && req.query.name) {
            options.name = req.query.name;
        }

        task.all()
            .then((tasks) => {
                res.status(200);
                res.json(tasks);
            })
            .catch((err) => {
                res.status(500);
                return res.json(err);
            })
    })
    .put(function (req, res) {
        let newTaskInfo = req.body;

        let newTask = new task(newTaskInfo);
        newTask.save()
            .then(() => {
                res.status(200);
                res.json(newTask.valueOf());
            })
            .catch((err) => {
                res.status(400);
                return res.json(err);
            })
    });

router.route('/tasks/:name')
    .delete(function (req, res) {
        task.deleteOne().where( {name: req.params.taskName}).exec()
            .then((tasks) => {
                res.status(200);
                res.json(tasks);
            })
            .catch((err) => {
                res.status(404);
                return res.json(err);
            })

    });

module.exports = router;
