const mongoose = require('mongoose');

const TimerSchema = mongoose.Schema({
  time: {
    required: true,
    type: Number,
  },
  stopped: {
    required: true,
    type: Boolean
  }
});

const timer = mongoose.model('timer', TimerSchema);

module.exports = timer;
