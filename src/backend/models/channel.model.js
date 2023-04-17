const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')

const channelSchema = new mongoose.Schema({
  user_id: { type: ObjectId },
  name: { type: String, required: true, unique: true },
  nametag: { type: String, required: true, unique: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  country: { type: String }
  // Ajoutez ici d'autres propriétés si nécessaire
})

module.exports = mongoose.model('Channel', channelSchema)