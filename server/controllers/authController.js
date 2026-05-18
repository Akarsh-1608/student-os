const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

// Register User
const registerUser = async (
  req,
  res
) => {

  try {

    const {
      name,
      email,
      password,
    } = req.body

    // Check existing user
    const existingUser =
      await User.findOne({ email })

    if (existingUser) {

      return res.status(400).json({
        message:
          "User already exists",
      })
    }

    // Hash Password
    const salt =
      await bcrypt.genSalt(10)

    const hashedPassword =
      await bcrypt.hash(
        password,
        salt
      )

    // Create User
    const user = await User.create({
      name,
      email,
      password:
        hashedPassword,
    })

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
      },
      "secretkey",
      {
        expiresIn: "7d",
      }
    )

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}
// Login User
const loginUser = async (
  req,
  res
) => {

  try {

    const {
      email,
      password,
    } = req.body

    // Find User
    const user =
      await User.findOne({ email })

    if (!user) {

      return res.status(400).json({
        message: "Invalid credentials",
      })
    }

    // Compare Password
    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      )

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid credentials",
      })
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user._id,
      },
      "secretkey",
      {
        expiresIn: "7d",
      }
    )

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })

  } catch (error) {

    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  registerUser,
  loginUser,
}