import express, { urlencoded } from "express";
import { addCard } from "./controllers/card.controller.js";

const app = express();

app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());

app.get("/ping", (req, res) => {
  return res.send("Server is running");
});

app.post("/cards", addCard)

export default app;
