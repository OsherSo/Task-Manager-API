const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://Kazoon:Beitar1936@kazoon.bsoisgk.mongodb.net/TaskManager?retryWrites=true&w=majority';

mongoose
  .connect(connectionString)
  .then(() => {
    console.log('Connected to DB...');
  })
  .catch((err) => {
    console.log(err);
  });
