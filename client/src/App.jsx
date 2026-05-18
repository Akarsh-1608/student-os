import { useEffect, useState } from "react"

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

import {
  getTasks,
  createTask,
  deleteTaskApi,
  updateTaskApi,
} from "./api/taskApi"

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const [category, setCategory] =
    useState("Study")

  const [filter, setFilter] =
    useState("All")

  const [priority, setPriority] =
    useState("Medium")

  const [dueDate, setDueDate] =
    useState("")

  const [search, setSearch] =
    useState("")

  const [sortBy, setSortBy] =
    useState("default")

  // Load Tasks From Backend
  useEffect(() => {

    const fetchTasks = async () => {

      const data = await getTasks()

      setTasks(data)
    }

    fetchTasks()

  }, [])

  // Add Task
  const addTask = async () => {

    if (task.trim() === "") return

    const newTask = {
      text: task,
      category,
      priority,
      dueDate,
      completed: false,
    }

    const savedTask =
      await createTask(newTask)

    setTasks([...tasks, savedTask])

    setTask("")
    setDueDate("")
  }

  // Delete Task
  const deleteTask = async (id) => {

    await deleteTaskApi(id)

    setTasks(
      tasks.filter(
        (task) => task._id !== id
      )
    )
  }

  // Toggle Complete
  const toggleTask = async (id) => {

    const taskToUpdate =
      tasks.find(
        (task) => task._id === id
      )

    const updatedTask =
      await updateTaskApi(id, {
        completed:
          !taskToUpdate.completed,
      })

    setTasks(
      tasks.map((task) =>
        task._id === id
          ? updatedTask
          : task
      )
    )
  }

  // Filter Tasks
  let filteredTasks =
    filter === "All"
      ? tasks
      : tasks.filter(
          (task) =>
            task.category === filter
        )

  // Search Filter
  filteredTasks =
    filteredTasks.filter((task) =>
      task.text
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    )

  // Sort By Priority
  if (sortBy === "priority") {

    const priorityOrder = {
      High: 1,
      Medium: 2,
      Low: 3,
    }

    filteredTasks.sort(
      (a, b) =>
        priorityOrder[a.priority] -
        priorityOrder[b.priority]
    )
  }

  // Sort By Date
  if (sortBy === "date") {

    filteredTasks.sort(
      (a, b) =>
        new Date(a.dueDate) -
        new Date(b.dueDate)
    )
  }

  return (
    <div className="min-h-screen md:h-screen bg-gray-100 md:flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

       <div className="p-3 md:p-6">

          <TaskForm
            task={task}
            setTask={setTask}
            addTask={addTask}
            category={category}
            setCategory={setCategory}
            priority={priority}
            setPriority={setPriority}
            dueDate={dueDate}
            setDueDate={setDueDate}
          />

          {/* Search + Sort */}
          <div className="flex flex-col md:flex-row gap-3 mb-6">

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="flex-1 p-3 rounded-xl border outline-none"
            />

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="p-3 rounded-xl border"
            >

              <option value="default">
                Sort By
              </option>

              <option value="priority">
                Priority
              </option>

              <option value="date">
                Due Date
              </option>

            </select>

          </div>

          {/* Filter Buttons */}
         <div className="flex flex-wrap gap-3 mb-6">

            <button
              onClick={() =>
                setFilter("All")
              }
              className="bg-black text-white px-4 py-2 rounded-xl"
            >
              All
            </button>

            <button
              onClick={() =>
                setFilter("Study")
              }
              className="bg-blue-500 text-white px-4 py-2 rounded-xl"
            >
              Study
            </button>

            <button
              onClick={() =>
                setFilter("Gym")
              }
              className="bg-green-500 text-white px-4 py-2 rounded-xl"
            >
              Gym
            </button>

            <button
              onClick={() =>
                setFilter("Personal")
              }
              className="bg-purple-500 text-white px-4 py-2 rounded-xl"
            >
              Personal
            </button>

          </div>

          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />

        </div>

      </div>

    </div>
  )
}

export default App