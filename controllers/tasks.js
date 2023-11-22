const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      status: 'success',
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: 'There is no task with this id.' });
    }
    res.status(200).json({
      status: 'success',
      data: task,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  res.send('updateTask');
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findOneAndDelete({ _id: id });
    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
