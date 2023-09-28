import * as express from "express";
import * as cors from "cors";
//Api endpoint files
import { runServerTest } from "./handlers/findServer";
import swaggerDocs from "./documentation/swagger";

//express library
const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

swaggerDocs(app);

// endpoint
app.get("/find-server", runServerTest);

export { app };
