const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must include a name for the task.'],
    trim: true,
    minLength: [5, 'The task name should be a minimum of 5 characters.'],
    maxLength: [30, 'The task name should be a maximum of 30 characters.'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', taskSchema);
