function TaskItem({
  task,
  toggleTask,
  deleteTask,
}) {

  return (
    <div className="bg-white p-4 rounded-2xl shadow flex justify-between items-center">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            toggleTask(task._id)
          }
        />

        <div>

          <p
            className={
              task.completed
                ? "line-through text-gray-400"
                : ""
            }
          >
            {task.text}
          </p>

          <p className="text-sm text-gray-500">
            {task.category}
          </p>

          <p className="text-sm">
            Priority: {task.priority}
          </p>

          <p className="text-sm text-gray-500">
            Due: {task.dueDate || "No Date"}
          </p>

        </div>

      </div>

      <button
        onClick={() =>
          deleteTask(task._id)
        }
        className="text-red-500"
      >
        Delete
      </button>

    </div>
  )
}

export default TaskItem