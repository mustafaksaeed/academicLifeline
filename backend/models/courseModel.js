import mongoose, { Schema, model } from "mongoose";

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
});

const courseModel = model("Courses", courseSchema);
export default courseModel;

("here we have the course name and code ");
//revaluate if i want to send messages back
//maybe u have q class due soon send "y" to change to completed or someshit
//coursecode, name, priority, status as in compleye or not
//due date

//in courses i have a courses, in courses individual courses
//set that up
//learn wtf mongodb is its like react form ngl
