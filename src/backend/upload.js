const express = require('express')
const multer = require('multer')
const mongoose = require('mongoose')
const { Schema } = mongoose

// Définir le schéma pour les documents de la collection 'videos'
const videoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  buffer: { type: Buffer, required: true }
})

// Créer le modèle 'Video' à partir du schéma
const Video = mongoose.model('Video', videoSchema)

// Créer un middleware Multer pour gérer l'upload de fichiers
const storage = multer.memoryStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage })

// Créer une instance d'application Express
const app = express()

// Configurer les routes
app.post('/upload', upload.single('video'), (req, res) => {
  const { title, description } = req.body
  const { buffer } = req.file
  const video = new Video({ title, description, buffer })
  video.save((err, savedVideo) => {
    if (err) {
      console.error(err)
      res.status(500).send('Error uploading video')
      return
    }
    res.send('Video uploaded successfully')
  })
})

app.get('/videos/:id', (req, res) => {
  const { id } = req.params
  Video.findById(id, (err, video) => {
    if (err) {
      console.error(err)
      res.status(500).send('Error retrieving video')
      return
    }
    res.setHeader('Content-Type', 'video/mp4')
    res.send(video.buffer)
  })
})

// Se connecter à la base de données
mongoose.connect('mongodb://localhost:/', { useNewUrlParser: true })
