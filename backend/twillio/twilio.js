import twilio from "twilio";
import VoiceResponse from "twilio";

const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const client = twilio(accountSid, authToken);
const twilioNum = process.env.twilioNum;
const myNum = process.env.myNum;

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
