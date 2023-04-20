import { mongoose } from "mongoose";

// Define schema
const Schema = mongoose.Schema;

const ChannelModelSchema = new Schema({
  id: Number,
  name: String,
  pfp: String,
  subs: Number,
  about: String
});

// Compile model from schema
const ChannelModel = mongoose.model("channels", ChannelModelSchema);

export default ChannelModel;
