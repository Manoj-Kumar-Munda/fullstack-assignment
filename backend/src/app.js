import express, { urlencoded } from "express";
import { addCard, getCard, getCards } from "./controllers/card.controller.js";
import cors from "cors";
const app = express();

// app.use(cors());

app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json());

app.get("/ping", (req, res) => {
  return res.send("Server is running");
});

app.post("/cards", addCard);
app.get("/cards", getCards);
app.get("/cards/:title", getCard);

export default app;
