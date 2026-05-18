const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({

  text: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    default: "Study",
  },

  priority: {
    type: String,
    default: "Medium",
  },

  dueDate: {
    type: String,
  },
user: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
},
  completed: {
    type: Boolean,
    default: false,
  },

}, {
  timestamps: true,
})

module.exports = mongoose.model("Task", taskSchema)