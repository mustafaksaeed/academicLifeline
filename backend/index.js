import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import db from "./db/database.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import authorize from "./middleware/authMiddleware.js";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log("listening on port", port);
});

await db();

app.use("/api", authRoutes);
app.use("/courses", courseRoutes);
app.get("/health", (req, res) => {
  console.log(req.body);
  res.send("ok");
});
