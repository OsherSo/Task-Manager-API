require('dotenv').config();
const express = require('express');

const notFound = require('./middlewares/notFound');
const connectDB = require('./db/connect');
const tasksRouter = require('./routes/tasks');

const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasksRouter);

app.use(notFound);

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
