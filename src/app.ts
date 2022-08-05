// VikingChess Server: Backend Infrastructure

// 1. Node.js running on typescript. Eslinted and tested.
  // - Serves as an api server
  // - Frontend service will send api requests to
  //   this server and act accordingly

// 2. Storage/Database: Redis
  // - There is no need to persist user data, redis is perfect.
  // - There is also no need for structure,
  //   data can be stored as key val (noSQL).
  // - Also less setup required when deploying.

// 3. Deployment
  // - Hoping to setup github actions for CD.
  //   Need to find something for CI with testing.
  // - Deployment would ideally be as a built docker image
  //   on heroku free or lowest tier.

import express from "express";
import { ROUTES } from "./routes";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", ROUTES);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
