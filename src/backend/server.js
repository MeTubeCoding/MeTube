/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable n/handle-callback-err */
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

const uri = 'mongodb+srv://Username:Password@metube.1cfbpke.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const fs = require('fs')

const publi = path.join(__dirname, 'nom du dossier Public')

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
  extended: true

}))

// app.use('/', express.static(public));

app.use(cors())

app.post('/videos', function (req, res) {
  const fakeVideos = [{
    id: 1,
    title: 'Nabil a cassé mon bong',
    miniature: 'https://imgs.search.brave.com/5KvnUyLxAcJHuuU_Ry7pJksq9llJ1Cf0XXfyuKJ7IM0/rs:fit:1200:900:1/g:ce/aHR0cDovL2kuaW1n/dXIuY29tL3ExMmgy/LmpwZw',
    channel: 'Roro',
    video: 'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
    tags: ['défonce', 'réaction']
  },
  {
    id: 2,
    title: 'Gros bartsimpson avec Narbok',
    miniature: 'https://imgs.search.brave.com/FjKYVIUEMX-Rtp38q3Ztm3a7j6bsX5rOpQGK5BGms5g/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDgxMTc0/OTcucG5n',
    channel: 'Ludwig',
    video: 'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
    tags: ['défonce', 'macron']
  },
  {
    id: 3,
    title: 'Nabil est parti sans fumer...',
    miniature: 'https://imgs.search.brave.com/H4X-HS4LrQqKVL9iot-eS6yt_uyWTNvu-KZfjO_i9RI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9oaWdo/dGltZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzAx/L0xvdHNPZkpvaW50/cy5qcGc',
    channel: 'Maxime',
    video: 'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
    tags: ['défonce']
  },
  {
    id: 4,
    title: 'Il a mangé tout le tramadole omg !',
    miniature: 'https://imgs.search.brave.com/sQassPoRQw3-kmZKo4fGSGpSGyCxjdlyDQmobfn-YYY/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljZG9tYWlu/cGljdHVyZXMubmV0/L3BpY3R1cmVzLzQw/MDAwL3ZlbGthL2xl/bnRpbGt5LmpwZw',
    channel: 'Roro',
    video: 'https://cdn.discordapp.com/attachments/935989994735169546/1082443934741053530/redditsave.com_real_hol_up-pvq9he9jok571.mp4',
    tags: ['défonce', 'macron', 'fun', 'réaction']
  },
  {
    id: 5,
    title: 'Il a une calvitie',
    miniature: 'https://imgs.search.brave.com/Mzd1G1UAR4KtlSpOFaL5bLw8jY4YabGntaZq_3qM78Y/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4w/U0hscC16THhYTmg1/a29hUFhHdk9RSGFI/YSZwaWQ9QXBp',
    channel: 'Roro',
    video: 'https://media.discordapp.net/attachments/818430407682555956/1086955678540775525/arm3egX_460sv.mp4',
    tags: ['macron']
  }]

  const noResult = [{
    id: 1,
    title: 'No Results',
    miniature: 'https://cdn.discordapp.com/attachments/906279185864073226/1095710412609167591/IMG_5148.jpg',
    channel: '',
    video: 'e.mp4',
    tags: ['']
  }]

  const requestString = req.body.data
  const regexString = requestString.replace(/ /g, '|').split('').join('.*')
  const regex = new RegExp(regexString, 'i')
  const requestedVideos = fakeVideos.filter(video => regex.test(video.title) || regex.test(video.channel) || video.tags.some(tag => regex.test(tag)))

  if (requestedVideos.length > 0) {
    res.json(requestedVideos)
  } else {
    res.json(noResult)
  }

  /*
   * difficulté: 3/5
   * recherche by tags
   */

  /*
   * difficulté: 5/5
   * recherche la plus proche en fonction des lettres (search: "nbl a cs mn bg" = "Nabil a cassé mon bong")
   */
})

// Optionnel a vous de voir pour vous adapter à votre problématique :

// app.get('/',(req,res)=>{

//     res.sendFile(path.join('nomDuDossierOuLeUserArrive', 'nomDuFichierSurLequelLeUserEstCenséAtterirDèsQuilEstSurLeSite.html'));
// })

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

app.get('/demo', (req, res) => {
  console.log('test')
  res.end('reponse du serveur')
})

app.listen(5600, () => {
  console.log(console.clear)
  console.log('Server app listening on port 5600')
})
