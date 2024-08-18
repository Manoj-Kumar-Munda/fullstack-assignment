import mongoose, { Schema } from "mongoose";

const cardSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  }
});

const Card = mongoose.model("Card", cardSchema);
export default Card;
