import express from "express";

const router = express.Router();

//get courses
router.get("/course", async (req, res) => {
  res.send("courses", courses);
  console.log("courses");
});

export default router;
//create a course

//create a reimnder in course like course:id/reminder
