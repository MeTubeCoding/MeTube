import { mongoose } from 'mongoose'

// Define schema
const Schema = mongoose.Schema

const VideoModelSchema = new Schema({
  title: String,
  miniature: String,
  video: String,
  release: Date,
  description: String,
  short: Boolean
})

// Compile model from schema
const VideoModel = mongoose.model('VideoModel', VideoModelSchema)

export default VideoModel
