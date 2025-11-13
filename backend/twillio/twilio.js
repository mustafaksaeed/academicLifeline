import twilio from "twilio";
import VoiceResponse from "twilio";

const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const client = twilio(accountSid, authToken);
const twilioNum = process.env.twilioNum;
const myNum = process.env.myNum;

export async function createCall() {
  try {
    const call = await client.calls.create({
      from: twilioNum,
      to: myNum,
      url: "http://demo.twilio.com/docs/voice.xml",
    });
  } catch (error) {
    console.log("error with call", error);
  }

  console.log(call.sid);
}

export async function createMessage() {
  try {
    const message = await client.messages.create({
      body: "hello",
      from: twilioNum,
      to: myNum,
    });
  } catch (error) {
    console.log("error with message", message);
  }

  console.log(message.body);
}
