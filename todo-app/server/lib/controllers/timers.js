const Timer = require('../models/timer');

module.exports = {
  all: function (req, res) {
    Timer.find().exec((err, timer) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.json(timer);
    });
  },
  time: function (req, res) {
    Timer.find().exec((err, timer) => {
      if (err) {
        res.status(500);
        res.json(err);
        return;
      }
      res.json(timer.time);
    });
  },
  stop: function (req, res) {
    let val = req.params.stopped;
    Timer.updateMany({ stopped: val})
        .then((timer) => {
          res.status(200);
          res.json(timer);
        })
        .catch((err) => {
          res.status(404);
          return res.json(err);
        });
    }
}
