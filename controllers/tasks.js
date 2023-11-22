const Task = require('../models/Task');
const asyncWrapper = require('../middlewares/asyncWrapper');
const { createCustomError } = require('../errors/CustomError');

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });
  if (!task) {
    return next(createCustomError('There is no task with this id.', 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError('There is no task with this id.', 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;
  await Task.findOneAndDelete({ _id: id });
  res.status(200).send();
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
