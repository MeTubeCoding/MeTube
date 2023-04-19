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
const { channel } = require('diagnostics_channel')

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
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

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

app.post('/signup', (req, res) => {
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('profile')
        const messages = database.collection('users')
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

const bcrypt = require('bcryptjs')

app.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const database = client.db('profile')
    const users = database.collection('users')

    const user = await users.findOne({ emailaddress: email })

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password)
      if (isPasswordCorrect) {
        res.json({
          success: true,
          message: 'Connexion réussie',
          hashedPassword: user.password,
          email: `${email}`,
          password: `${password}`
        })
      } else {
        res.status(401).json({ success: false, message: 'Incorrect password' })
        res.end()
      }
    } else {
      res.status(404).json({ success: false, message: 'Email does not exist' })
      res.end()
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error while connecting' })
    res.end()
  }
  res.end()
})

app.get('/check-email', async (req, res) => {
  const { email } = req.query
  const database = client.db('profile')
  const users = database.collection('users')
  const user = await users.findOne({ 'email-address': email })
  res.json({ exists: !!user })
  res.end()
})

app.get('/demo', (req, res) => {
  console.log('test')
  res.end('reponse du serveur')
})
app.get('/profile', async (req, res) => {
  const userEmail = req.cookies.email
  const database = client.db('profile')
  const users = database.collection('users')
  const user = await users.findOne({ 'email-address': userEmail })

  if (user) {
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    )
    res.json({ username: user.username, email: user.emailAddress })
  } else {
    res.status(401).send('Unauthorized')
    res.end()
  }
  res.end()
})

// app.use('/', express.static(public));

app.use(
  cors({
    origin: 'http://localhost:3000', // Remplacez par l'URL de votre application frontend
    credentials: true // Permet l'envoi de cookies avec les requêtes CORS
  })
)
app.post('/channels'),
  function (req, res) {
    const fakeChannels = [
      {
        id: 1,
        name: 'Roro',
        pfp: 'https://cdn.discordapp.com/attachments/494204379822555139/1097441029503860797/Capture_decran_2023-04-17_a_10.36.32.png',
        subs: 200
      },
      {
        id: 2,
        name: 'Maxime',
        pfp: 'https://cdn.discordapp.com/attachments/494204379822555139/1097441029117988914/Capture_decran_2023-04-17_a_10.36.13.png',
        subs: 1
      },
      {
        id: 3,
        name: 'Ludwig',
        pfp: 'https://cdn.discordapp.com/attachments/494204379822555139/1097441029751316550/Capture_decran_2023-03-29_a_16.17.11.png',
        subs: 60000
      }
    ]

    const requestString = req.body.data
    const regexString = requestString.replace(/ /g, '|').split('').join('.*')
    const regex = new RegExp(regexString, 'i')

    const requestedChannels = fakeChannels.filter(channel =>
      regex.test(channel.name)
    )

    if (requestedChannels.length > 0) {
      res.json(requestedChannels)
    }
  }

app.post('/videos', function (req, res) {
  const fakeVideos = [
    {
      id: 1,
      title: 'Nabil a cassé mon bong',
      miniature:
        'https://imgs.search.brave.com/5KvnUyLxAcJHuuU_Ry7pJksq9llJ1Cf0XXfyuKJ7IM0/rs:fit:1200:900:1/g:ce/aHR0cDovL2kuaW1n/dXIuY29tL3ExMmgy/LmpwZw',
      channel: 'Roro',
      video:
        'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
      tags: ['défonce', 'réaction'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: ''
    },
    {
      id: 2,
      title: 'Gros bartsimpson avec Narbok',
      miniature:
        'https://imgs.search.brave.com/FjKYVIUEMX-Rtp38q3Ztm3a7j6bsX5rOpQGK5BGms5g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgxMTc0/OTcucG5n',
      channel: 'Ludwig',
      video:
        'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
      tags: ['défonce', 'macron'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: ''
    },
    {
      id: 3,
      title: 'Nabil est parti sans fumer...',
      miniature:
        'https://imgs.search.brave.com/H4X-HS4LrQqKVL9iot-eS6yt_uyWTNvu-KZfjO_i9RI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9oaWdo/dGltZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAx/L0xvdHNPZkpvaW50/cy5qcGc',
      channel: 'Maxime',
      video:
        'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
      tags: ['défonce'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: ''
    },
    {
      id: 4,
      title: 'Il a mangé tout le tramadole omg !',
      miniature:
        'https://imgs.search.brave.com/sQassPoRQw3-kmZKo4fGSGpSGyCxjdlyDQmobfn-YYY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzQw/MDAwL3ZlbGthL2xl/bnRpbGt5LmpwZw',
      channel: 'Roro',
      video:
        'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
      tags: ['défonce', 'macron', 'fun', 'réaction'],
      views: 10,
      release: '2022-03-23',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: ''
    },
    {
      id: 5,
      title: 'Il a une calvitie',
      miniature:
        'https://imgs.search.brave.com/Mzd1G1UAR4KtlSpOFaL5bLw8jY4YabGntaZq_3qM78Y/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/U0hscC16THhYTmg1/a29hUFhHdk9RSGFI/YSZwaWQ9QXBp',
      channel: 'Roro',
      video:
        'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
      tags: ['macron'],
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

app.post('/moderation', (req, res) => {
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('LiveBdd')
        const messages = database.collection('messageModeration')
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

app.post('/titre', (req, res) => {
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('LiveBdd')
        const messages = database.collection('titre')
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

app.get('/moderation', (req, res) => {
  client.connect(err => {
    async function runy() {
      try {
        const database = client.db('LiveBdd')
        const messages = database.collection('messageModeration')
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

app.get('/demo', (req, res) => {
  console.log('test')
  res.end('reponse du serveur')
})

app.listen(5600, () => {
  console.clear()
  console.log('Server app listening on port 5600')
})
