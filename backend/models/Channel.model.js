import { mongoose } from "mongoose";

// Define schema
const Schema = mongoose.Schema;

const ChannelModelSchema = new Schema({
  title: String,
  miniature: String,
  video: String,
  release: String,
  description: String,
  short: Boolean,
});

// Compile model from schema
const ChannelModel = mongoose.model("channels", ChannelModelSchema);

export default ChannelModel;
