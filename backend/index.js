import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();
const app = express();
const port = process.env.PORT;
const accountSid = process.env.SID;
const accountToken = process.env.TOKEN;

app.listen(port, () => {
  console.log("listening on port", port);
});

app.get("/health", (req, res) => {
  res.send("ok");
});
