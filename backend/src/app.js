import express, { urlencoded } from "express";

const app = express();

app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());

app.get("/ping", (req, res) => {
  return res.send("Server is running");
});

export default app;
