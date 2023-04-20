const mongoose = require('mongoose')

const shortVideo = mongoose.Schema({
    url: String,
    channel: String,
    likes: Number,
    dislikes: Number,
    comments: Number,
    description: String,
    shares: Number,
    release: Date
})

module.exports = mongoose.model('shortVideo', short)