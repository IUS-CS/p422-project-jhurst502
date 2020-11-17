const mongoose = require('mongoose');
const Task = require('./lib/models/task');

const example = new Task({
  name: 'DemoTask',
  dueDate: '2021-09-09',
  urgency: 1
});

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true, useUnifiedTopology: true});

async function save() {
  await Task.deleteMany();
  await example.save();
}

save().then(() => console.log('complete'));
