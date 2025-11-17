import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.URI;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export default async function db() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}
