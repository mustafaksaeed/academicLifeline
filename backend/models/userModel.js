import mongoose, { Schema, model } from "mongoose";
const userSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
});

const User = model("User", userSchema);
("make user schema with id as the fuid we create with auth, email, and password");
