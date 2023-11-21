const getAllTasks = (req, res) => {
  res.send('getAllTasks');
};

const createTask = (req, res) => {
  res.send('createTask');
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
