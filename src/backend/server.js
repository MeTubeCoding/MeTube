/* eslint-disable padded-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
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

const uri =
  'mongodb+srv://SM_des_SM:meilleurSM@metube.1cfbpke.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

const fs = require('fs')

const publi = path.join(__dirname, 'nom du dossier Public')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(bodyparser.json())
app.use(
  bodyparser.urlencoded({
    extended: true
  })
)

app.use('/', express.static(publi))

app.use(
  cors({
    origin: 'http://localhost:3000'
  })
)

app.post('/node/sub', (req, res) => {
  client.connect(err => {
    async function run() {
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
    async function run() {
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

app.get('/demo', (req, res) => {
  console.log('test')
  res.end('reponse du serveur')
})

// app.use('/', express.static(public));

app.use(cors())

app.post('/videos', function (req, res) {
  const fakeVideos = [
    {
      id: 1,
      title: 'Journey Through The Universe - HD Documentary',
      miniature:
        'https://imgs.search.brave.com/j_w-SCcubajyNDPpXf6TgVw3bReenqnQtJ8E9eDmO1M/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/c0pjYVNyallFSWEt/TTRhamRWZm5BSGFF/SyZwaWQ9QXBp',
      channel: 'Roro',
      video:
        'https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4',
      tags: ['documentary', 'space'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: ''
    },
    {
      id: 2,
      title: 'Journey Through The Universe - HD Documentary',
      miniature:
        'https://imgs.search.brave.com/9lZjZtg--YsJPBSoOlhNUD00_gb4SsoQCASJLPaT-Ic/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/cUpTNTNiRkJLUldx/UlpFakhMY1R3SGFF/SyZwaWQ9QXBp',
      channel: 'Ludwig',
      video:
        'https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4',
      tags: ['planet'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: ''
    },
    {
      id: 3,
      title:
        'Stunning New Universe Fly-Through Really Puts Things Into Perspective',
      miniature:
        'https://imgs.search.brave.com/dwikNKmv1gJpotOSRd7TLUMUY-xeCBxP6FORMumoXqI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/T1ZCZ1NHdUFFVUtt/RHJkMFRMeGtnSGFF/SyZwaWQ9QXBp',
      channel: 'Maxime',
      video:
        'https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4',
      tags: ['galaxy', 'space'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: ''
    },
    {
      id: 4,
      title:
        '"Celestial Relaxation" 1 HR of 4K NASA Space/Galaxy Footage + 432HZ Ambient Music',
      miniature:
        'https://imgs.search.brave.com/xrBPkPfs0RQj4PC259B81t-N_wefuBqtvhm2001eXg8/rs:fit:1200:1080:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsLzIvNi8yLzMy/NjM1OC5qcGc',
      channel: 'Roro',
      video:
        'https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4',
      tags: ['music'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: ''
    },
    {
      id: 5,
      title: 'Starship Mission to Mars',
      miniature:
        'https://imgs.search.brave.com/H-9x8yEqk2DmU-x9DfbrpZkQ7bt7DlCkXzetQRhnbxw/rs:fit:1200:1080:1/g:ce/aHR0cDovL3dhbGxw/YXBlcmNhdmUuY29t/L3dwL2NmQkFCQXgu/anBn',
      channel: 'Roro',
      video:
        'https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4',
      tags: ['ship'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: true,
      duration: ''
    }
  ]

  const requestString = req.body.data
  const regexString = requestString.replace(/ /g, '|').split('').join('.*')
  const regex = new RegExp(regexString, 'i')
  const requestedVideos = fakeVideos.filter(
    video =>
      regex.test(video.title) ||
      regex.test(video.channel) ||
      video.tags.some(tag => regex.test(tag))
  )

  if (requestedVideos.length > 0) {
    res.json(requestedVideos)
  }
})

// Optionnel a vous de voir pour vous adapter à votre problématique :

// app.get('/',(req,res)=>{

//     res.sendFile(path.join('nomDuDossierOuLeUserArrive', 'nomDuFichierSurLequelLeUserEstCenséAtterirDèsQuilEstSurLeSite.html'));
// })

app.post('/node/sub', (req, res) => {
  client.connect(err => {
    async function run() {
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

app.get('/demo', (req, res) => {
  console.log('test')
  res.end('reponse du serveur')
})

app.listen(5600, () => {
  console.log(console.clear)
  console.log('Server app listening on port 5600')
})
