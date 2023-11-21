require('./db/connect');
const express = require('express');

const tasksRouter = require('./routes/tasks');

const app = express();

app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
