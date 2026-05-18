const express = require("express")

const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controllers/taskController")
const protect =
  require("../middleware/authMiddleware")
const router = express.Router()

// Create Task Route
router.post(
  "/",
  protect,
  createTask
)
router.get(
  "/",
  protect,
  getTasks
)
router.delete(
  "/:id",
  protect,
  deleteTask
)
router.put(
  "/:id",
  protect,
  updateTask
)
module.exports = router