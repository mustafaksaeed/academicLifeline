import express from "express";
import dotenv from "dotenv";
import run from "./db/database.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.listen(port, () => {
  console.log("listening on port", port);
});

app.use("/api", authRoutes);

app.get("/health", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

run();
