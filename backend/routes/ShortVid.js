const express = require('express')
const router = express.Router()

const dbVideos = require('../models/Short')
const Data = require('./DataShort')

router.get('/', (req, res) => {
    res.status(200).send(Data)
})

router.get("/posts", (req, res) => {
    dbVideos.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

router.post('/posts', (req, res) => {
    const mtShortsDB = req.body

    dbVideos.create(mtShortsDB, (err, data) => {
        if(err){
            res.status(500).send(err)
            console.log(err)
        } else {
            res.status(201).send(data)
        }
    }
    )
})

module.exports = router