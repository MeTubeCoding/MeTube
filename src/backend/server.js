/* eslint-disable n/handle-callback-err */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-unused-vars */

// Cela va probablement un peu changer car il faut que je l'adapte pour typescript mais pour pouvez
// commencer à taffer la dessus y'aura juste quelque correction mineur à l'avenir le temps je règle le
// problème

const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')
const path = require('path')
const { MongoClient, ServerApiVersion, ObjectID } = require('mongodb')
const { query } = require('express')

const uri = 'mongodb+srv://SM_des_SM:meilleurSM@metube.1cfbpke.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

const fs = require('fs')

const publi = path.join(__dirname, 'nom du dossier Public')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true
}))

app.use('/', express.static(publi))

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.post('/node/sub', (req, res) => {
  client.connect(err => {
    async function run () {
      try {
        const database = client.db('BigOne')
        const movies = database.collection('enAttente')
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

app.post('/data', (req, res) => {
  client.connect(err => {
    async function run () {
      try {
        const database = client.db('profile')
        const movies = database.collection('users')
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

  res.end('trop cool')
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
        res.status(401).json({ success: false, message: 'Mot de passe incorrect' })
      }
    } else {
      res.status(404).json({ success: false, message: "L'email n'existe pas" })
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Erreur lors de la connexion' })
  }
})

app.get('/demo', (req, res) => {
  console.log('test')
  res.end('reponse du serveur')
})

app.listen(5600, () => {
  console.log(console.clear())
  console.log('Server app listening on port 5600')
})
