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
  phoneNumber: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
});

const User = model("User", userSchema);

export default User;

// ("make user schema with id as the fuid we create with auth, email, and password");
