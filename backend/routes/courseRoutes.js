import express from "express";

const router = express.Router();

//get courses
router.get("/course", async (req, res) => {});
router.get("courses", async (req, res) => {
  const { sessions } = req.body;
  res.send({
    userSession: sessions.isLoggedin,
  });
});
export default router;
//create a course

//create a reimnder in course like course:id/reminder
