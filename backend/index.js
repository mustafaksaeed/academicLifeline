import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import run from "./db/database.js";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import authorize from "./middleware/authMiddleware.js";
import session from "express-session";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const uuid = uuidv4();
app.use(
  session({
    name: "SessionCookie",
    genid: function (req) {
      console.log("session id created");
      return genuuid();
    },
    secret: uuid,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, expires: 60000 },
  })
);

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
