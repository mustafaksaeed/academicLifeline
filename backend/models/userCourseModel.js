import mongoose, { Schema, model } from "mongoose";

const userCourseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
  },
});

const userCourse = model("userCourse", userCourseSchema);

export default userCourse;
