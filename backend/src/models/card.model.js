import mongoose, { Schema } from "mongoose";

const cardSchema = Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model("Card", cardSchema);
export default Card;
