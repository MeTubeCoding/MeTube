import { mongoose } from "mongoose";

// Define schema
const Schema = mongoose.Schema;

const VideoModelSchema = new Schema({
  id: Number,
  title: String,
  miniature: String,
  channel: String,
  video: String,
  tags: Array,
  views: Number,
  release: Array,
  description: String,
  short: Boolean,
  duration: Number
});

// Compile model from schema
const VideoModel = mongoose.model("video", VideoModelSchema);

export default VideoModel;
