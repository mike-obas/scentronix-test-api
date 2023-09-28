import * as functions from "firebase-functions";
import { app } from "./app";

//This will export all imported files to cloud function.
export const users_api = functions
  .runWith({
    memory: "512MB",
    timeoutSeconds: 60,
  })
  .region("europe-west2")
  .https.onRequest(app);
