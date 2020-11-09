const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: false
    },
    urgency: {
        type: Number,
        required: true
    }
});

taskSchema.static('all', function(){
    return this.find();
});

const task = mongoose.model('tasks', taskSchema);

module.exports = task;
