import mongoose, { Schema, model } from "mongoose";

const reminderSchema = new Schema({
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  priority: {
    type: String,
    enum: ["urgent", "high", "medium", "low"],
    default: "low",
  },
  dueDate: {
    type: Date,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userCourse",
  },
});

const reminder = model("Reminder", reminderSchema);

export default reminder;
