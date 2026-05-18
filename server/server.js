const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")

const connectDB = require("./config/db")

dotenv.config()

// Connect Database
connectDB()

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
app.use("/api/tasks", require("./routes/taskRoutes"))
app.use("/api/auth", require("./routes/authRoutes"))
// Test Route
app.get("/", (req, res) => {
  res.send("API is running...")
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})