import TaskItem from "./TaskItem"

function TaskList({
  tasks,
  toggleTask,
  deleteTask,
}) {

  return (
    <div className="space-y-3">

      {tasks.map((task) => (

        <TaskItem
          key={task._id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      ))}

    </div>
  )
}

export default TaskList