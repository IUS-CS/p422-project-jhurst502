const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
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
