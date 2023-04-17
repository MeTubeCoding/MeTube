/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const path = require('path')

const { MongoClient, ServerApiVersion } = require('mongodb')

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
require('./db.js')

const uri = process.env.URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

// Routes
const channelsRoutes = require('./routes/channels.routes')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(bodyparser.json())
app.use(
  bodyparser.urlencoded({
    extended: true
  })
)

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api/channels', channelsRoutes)

app.post('/chat', (req, res) => {
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('LiveBdd')
        const messages = database.collection('messageChat')
        const query = req.body
        await messages.insertOne(query)
      } finally {
        await client.close()
      }
    }
    run().catch(console.dir)
  })
  res.end()
})

app.post('/desc', (req, res) => {
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('LiveBdd')
        const messages = database.collection('description')
        const query = req.body
        await messages.insertOne(query)
      } finally {
        await client.close()
      }
    }
    run().catch(console.dir)
  })
  res.end()
})

app.get('/chat', (req, res) => {
  client.connect(err => {
    async function runy() {
      try {
        const database = client.db('LiveBdd')
        const messages = database.collection('messageChat')
        let search = await messages.find({}).toArray()
        const reponseSearch = JSON.stringify(search)
        res.end(reponseSearch)
      } finally {
        await client.close()
      }
    }
    runy().catch(console.dir)
  })
})

app.listen(5600, () => {
  console.log(console.clear())
  console.log('Server app listening on port 5600')
})

app.post('/create-channel', (req, res) => {
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('ChannelBDD')
        const messages = database.collection('channel')
        const query = req.body
        await messages.insertOne(query)
      } finally {
        await client.close()
      }
    }
    run().catch(console.dir)
  })
  res.end()
})
