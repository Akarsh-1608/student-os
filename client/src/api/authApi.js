import axios from "axios"

const API_URL =
  "https://student-os-vh7a.onrender.com/api/auth"

// Register
export const registerUser =
  async (userData) => {

    const response =
      await axios.post(
        `${API_URL}/register`,
        userData
      )

    return response.data
  }

// Login
export const loginUser =
  async (userData) => {

    const response =
      await axios.post(
        `${API_URL}/login`,
        userData
      )

    return response.data
  }