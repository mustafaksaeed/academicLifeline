import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import { createCall, createMessage } from "./twillio/twilio.js";
// import run from "./db/database.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import authorize from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log("listening on port", port);
});

app.use("/api", authRoutes);
app.use("/courses", authorize, courseRoutes);
app.get("/health", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

createCall();
createMessage();
