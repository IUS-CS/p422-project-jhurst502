const mongoose = require('mongoose');
const Task = require('./lib/models/task');
const Timer = require('./lib/models/timer');

const example = new Task({
  name: 'DemoTask',
  dueDate: '2021-09-09',
  urgency: 1
});

const timer = new Timer({
  time: 50,
  stopped: true
})

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true});

async function save() {
  await Timer.deleteMany();

  await timer.save();
}

save().then(() => console.log('complete'));
