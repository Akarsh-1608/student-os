function TaskForm({

  task,
  setTask,

  addTask,

  category,
  setCategory,

  priority,
  setPriority,

  dueDate,
  setDueDate,

}) {

  return (

    <div className="bg-white p-4 md:p-6 rounded-2xl shadow mb-6">

      <div className="flex flex-col md:flex-row gap-3">

        {/* Task Input */}
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
          className="flex-1 p-3 rounded-xl border outline-none w-full"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="p-3 rounded-xl border w-full md:w-auto"
        >

          <option value="Study">
            Study
          </option>

          <option value="Gym">
            Gym
          </option>

          <option value="Personal">
            Personal
          </option>

        </select>

        {/* Priority */}
        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
          className="p-3 rounded-xl border w-full md:w-auto"
        >

          <option value="High">
            High
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Low">
            Low
          </option>

        </select>

        {/* Due Date */}
        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
          className="p-3 rounded-xl border w-full md:w-auto"
        />

        {/* Add Button */}
        <button
          onClick={addTask}
          className="bg-black text-white px-6 py-3 rounded-xl w-full md:w-auto"
        >
          Add
        </button>

      </div>

    </div>
  )
}

export default TaskForm