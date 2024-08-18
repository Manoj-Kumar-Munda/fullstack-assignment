import Card from "../models/card.model";
import { ApiResponse } from "../utils/ApiResponse";

const addCard = async (req, res, next) => {
  const { title, description, link } = req.body;
  try {
    if (!title) {
      return res.status(400).json(new ApiResponse(400, "Title is required"));
    }
    if (!description) {
      return res
        .status(400)
        .json(new ApiResponse(400, "Description is required"));
    }

    const card = await Card.create({
      title,
      description,
      link,
    });

    if (!card) {
      return res
        .status(500)
        .json(new ApiResponse(500, "failed to create cards"));
    }

    return res.status(200).json(new ApiResponse(200, "card created", card));
  } catch (error) {
    return res.status(500).json(error?.message || "Internal server error");
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    console.log(cards);
    return res
      .status(200)
      .json(new ApiResponse(200, "Cards fetched successfully"));
  } catch (error) {
    return res.status(500).json(error?.message || "Internal server error");
  }
};

const getCard = async (req, res) => {
  const { title } = req.params;
  console.log(title);
  
  try {
    if (!title) {
      return res.status(400).json(new ApiResponse(400, "title is required"));
    }
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json(new ApiResponse(404, "Card not found"));
    }
    return res
      .status(200)
      .json(new ApiResponse(200, "card fetched successfilly", card));
  } catch (error) {
    return res.status(500).json(error?.message || "Internal server error");
  }
};

export { addCard, getCards, getCard };
