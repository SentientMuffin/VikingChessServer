import redis from "redis";

export const client = redis.createClient({
  socket: {
    host: "127.0.0.1",
    port: 6379
  },
  // password: "password"
});

client.on("error", err => {
  console.log("Error" + err);
});
