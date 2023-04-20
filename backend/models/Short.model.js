import { mongoose } from "mongoose";

// Define schema
const Schema = mongoose.Schema;

const ShortModelSchema = new Schema({
  id: Number,
  url: String,
  channel: String,
  description: String,
  likes: Number,
  dislikes: Number,
  comments: Number,
  shares: Number
});

// Compile model from schema
const ShortModel = mongoose.model("shorts", ShortModelSchema);

export default ShortModel;
