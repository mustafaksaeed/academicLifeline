import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import run from "./db/database.js";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import authorize from "./middleware/authMiddleware.js";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log("listening on port", port);
});

app.use("/api", authRoutes);
app.use("/courses", authorize, courseRoutes);

app.get("/health", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

// run();
