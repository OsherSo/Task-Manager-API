const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://Kazoon:Beitar1936@kazoon.bsoisgk.mongodb.net/TaskManager?retryWrites=true&w=majority';

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
