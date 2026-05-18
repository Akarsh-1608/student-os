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
    <div className="flex gap-3 mb-6">

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 p-3 rounded-xl border outline-none"
      />
      <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="p-3 rounded-xl border"
>
    

  <option>Study</option>
  <option>Gym</option>
  <option>Personal</option>

</select>
<select
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
  className="p-3 rounded-xl border"
>

  <option>High</option>
  <option>Medium</option>
  <option>Low</option>

</select>
<input
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
  className="p-3 rounded-xl border"
/>
      <button
        onClick={addTask}
        className="bg-black text-white px-5 rounded-xl"
      >
        Add
      </button>

    </div>
  )
}

export default TaskForm