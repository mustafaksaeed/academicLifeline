import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
async function run() {
  try {
    await mongoose.connect(uri, clientOptions);

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

export default run;
