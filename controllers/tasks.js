const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('getAllTasks');
};

const createTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = (req, res) => {
  res.send('getSingleTask');
};

const updateTask = (req, res) => {
  res.send('updateTask');
};

const deleteTask = (req, res) => {
  res.send('deleteTask');
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
