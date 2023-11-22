require('dotenv').config();
const express = require('express');

const connectDB = require('./db/connect');
const tasksRouter = require('./routes/tasks');

const app = express();

app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);

const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
