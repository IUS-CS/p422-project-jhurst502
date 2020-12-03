const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dueDate: {
        type: {
          month: String,
          day: Number,
          year: Number,
        }
    },
    urgency: {
        type: Number,
    }
});

TaskSchema.query.byName = function (name) {
  return this.where({name: name});
}

TaskSchema.query.byUrgency = function (urgency) {
  return this.where({urgency: urgency});
}

const task = mongoose.model('tasks', TaskSchema);

module.exports = task;
