/* eslint-disable @typescript-eslint/no-var-requires */

import express from 'express'
const app = express()
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import { resolve } from 'path'

import { MongoClient, ServerApiVersion } from 'mongodb'

import('dotenv').config({ path: resolve(__dirname, '../../.env') })
import './db'

const uri = process.env.URI

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(json())
app.use(
  urlencoded({
    extended: true
  })
)

app.use(cors(corsOptions))

app.post('/chat', (req, res) => {
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('LiveBdd')
        const movies = database.collection('messageChat')
        //   console.log("mongo connect")
        const query = req.body
        //   console.log(query);
        await movies.insertOne(query)
        //   console.log(movie);
      } finally {
        // Ensures that the client will close when you finish/error
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
        const movies = database.collection('messageChat')
        //   console.log("mongo connect")
        //   console.log(query);
        let search = await movies.find({}).toArray()
        console.log(search)
        //   console.log(movie);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close()
      }
    }
    runy().catch(console.dir)
  })
  res.end()
})
app.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const database = client.db('profile')
    const users = database.collection('users')

    const user = await users.findOne({ 'email-address': email })

    if (user) {
      if (password === user.password) {
        res.json({ success: true, message: 'Connexion réussie' })
      } else {
        res
          .status(401)
          .json({ success: false, message: 'Mot de passe incorrect' })
      }
    } else {
      res.status(404).json({ success: false, message: "L'email n'existe pas" })
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Erreur lors de la connexion' })
  }
})

app.listen(5600, () => {
  console.clear()
  console.log('Server app listening on port 5600')
})
