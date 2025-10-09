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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const reminder = model("Reminder", reminderSchema);

export default reminder;
