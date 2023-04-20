const express = require('express')
const router = express.Router

const vidRouter = require('./ShortVid')

router.get("/", (res,req) => {
    res.send("Metube Short")
})

router.use("/video", vidRouter)

module.exports = router