const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');

const port = 3000;

app.use('/api/v1/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
