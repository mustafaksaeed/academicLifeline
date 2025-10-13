import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import fs from "fs";
import "dotenv/config";

import { readFileSync } from "fs";

const servicePath = process.env.FServiceUrl;
const serviceAccount = JSON.parse(fs.readFileSync(servicePath, "utf8"));

const app = initializeApp({
  credential: cert(serviceAccount),
});

const auth = getAuth(app);

export default auth;
