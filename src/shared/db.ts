import * as redis from "redis";

export const db = redis.createClient({
  socket: {
    host: "127.0.0.1",
    port: 6379
  }
});

db.on("error", err => {
  console.log("Error" + err);
});

const dbConnection = async function () {
  await db.connect();
  console.log("Connected to redis");
};

dbConnection();

// module.exports = client;
