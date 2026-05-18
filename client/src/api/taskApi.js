import axios from "axios"

const API_URL =
  "https://student-os-vh7a.onrender.com/api/tasks"

// Get Token
const getToken = () => {

  return localStorage.getItem("token")
}

// Config With Token
const config = () => {

  return {
    headers: {
      Authorization:
        `Bearer ${getToken()}`,
    },
  }
}

// Get Tasks
export const getTasks =
  async () => {

    const response =
      await axios.get(
        API_URL,
        config()
      )

    return response.data
  }

// Create Task
export const createTask =
  async (taskData) => {

    const response =
      await axios.post(
        API_URL,
        taskData,
        config()
      )

    return response.data
  }

// Delete Task
export const deleteTaskApi =
  async (id) => {

    const response =
      await axios.delete(
        `${API_URL}/${id}`,
        config()
      )

    return response.data
  }

// Update Task
export const updateTaskApi =
  async (
    id,
    updatedData
  ) => {

    const response =
      await axios.put(
        `${API_URL}/${id}`,
        updatedData,
        config()
      )

    return response.data
  }