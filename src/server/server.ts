import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.json({ success: true });
});

export { server };
