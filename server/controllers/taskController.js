const Task = require("../models/Task")

// Create Task
const createTask = async (req, res) => {

  try {

    const task =
  await Task.create({
    ...req.body,
    user: req.user,
  })

    res.status(201).json(task)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}
// Get All Tasks
const getTasks = async (req, res) => {

  try {

  const tasks =
  await Task.find({
    user: req.user,
  })

    res.status(200).json(tasks)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}
// Delete Task
const deleteTask = async (req, res) => {

  try {

    const task = await Task.findByIdAndDelete(
      req.params.id
    )

    res.status(200).json(task)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}
// Update Task
const updateTask = async (req, res) => {

  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
  returnDocument: "after",
}
    )

    res.status(200).json(task)

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}
module.exports = {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
}