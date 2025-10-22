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
    secret: uuid,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, //1 hour
      httpOnly: true,
      secure: true,
    },
  })
);
// router.use((req, res, next) => {
//   if (!req.session.userID) return res.status(403).send("not logged in");
//   next();
// });

app.listen(port, () => {
  console.log("listening on port", port);
});

app.use("/api", authRoutes);
app.use("/courses", authorize, courseRoutes);
app.get("/health", (req, res) => {
  console.log(req.body);
  res.send("ok");
});
app.get("/api/check-auth", authorize, (req, res) => {
  res.send({
    userId: req.session.isLoggedIn,
  });
});

// app.get("/", (req, res) => {
//   if (req.session.views) {
//     req.session.views++;
//     res.send(`Number of views: ${req.session.views}`);
//   } else {
//     req.session.views = 1;
//     res.send("Welcome to this page for the first time!");
//   }
// });

// run();
