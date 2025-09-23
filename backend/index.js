import express from "express";
import dotenv from "dotenv";
import twilio from "twilio";
import VoiceResponse from "twilio";
import { MongoClient } from "mongodb";
dotenv.config();
const app = express();
const port = process.env.PORT;
const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const client = twilio(accountSid, authToken);
const twilioNum = process.env.twilioNum;
const myNum = process.env.myNum;

app.listen(port, () => {
  console.log("listening on port", port);
});

app.get("/health", (req, res) => {
  res.send("ok");
});

// Replace the uri string with your connection string
const uri = "<connection string URI>";
const mongoclient = new MongoClient(uri);
async function run() {
  try {
    const database = client.db("AcademicLifeline");
    const users = database.collection("users");
    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

/*
async function createCall() {
  const call = await client.calls.create({
    from: twilioNum,
    to: myNum,
    url: "http://demo.twilio.com/docs/voice.xml",
  });

  console.log(call.sid);
}
createCall();
*/
/*
demo code works!
async function createMessage() {
  const message = await client.messages.create({
    body: "hello",
    from: twilioNum,
    to: myNum,
  });

  console.log(message.body);
}

createMessage();

*/
