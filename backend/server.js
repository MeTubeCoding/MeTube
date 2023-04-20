/* eslint-disable padded-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

// Cela va probablement un peu changer car il faut que je l'adapte pour typescript mais pour pouvez
// commencer à taffer la dessus y'aura juste quelque correction mineur à l'avenir le temps je règle le
// problème
import dotenv from "dotenv";
dotenv.config();
import videoRoutes from "./routes/videos.js";
import mongoose from "mongoose";
import express from "express";
const app = express();

import cors from "cors";
import bodyparser from "body-parser";
import path from "path";
import { MongoClient, ServerApiVersion } from "mongodb";
import { query } from "express";

const uri = process.env.DB_LINK;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

app.use("/videos", videoRoutes);

app.post("/node/sub", (req, res) => {
  client.connect((err) => {
    async function run() {
      try {
        const database = client.db("BigOne");
        const movies = database.collection("enAttente");
        const query = req.body;
        await movies.insertOne(query);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
  });

  res.end();
});

app.post("/data", (req, res) => {
  client.connect((err) => {
    async function run() {
      try {
        const database = client.db("profile");
        const movies = database.collection("users");
        const query = req.body;
        await movies.insertOne(query);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
  });

  res.end("trop cool");
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const database = client.db("profile");
    const users = database.collection("users");

    const user = await users.findOne({ "email-address": email });

    if (user) {
      if (password === user.password) {
        res.json({ success: true, message: "Connexion réussie" });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Mot de passe incorrect" });
      }
    } else {
      res.status(404).json({ success: false, message: "L'email n'existe pas" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Erreur lors de la connexion" });
  }
});
app.post('/signup', async (req, res) => {
  try {
    const database = client.db('profile')
    const messages = database.collection('users')
    const query = req.body
    await messages.insertOne(query)
    await client.close()
    res.end() // Fermez la requête ici
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Error while creating user profile' })
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



app.get('/profile', async (req, res) => {
  const { email } = req.query
  const database = client.db('profile');
  const users = database.collection('users');

  try {
    const user = await users.findOne({ emailaddress: email });
    if (!user) {
      res.status(404).json({ success: false, message: 'User not found' });
    } else {
      const userData = {
        lastname: user.lastname,
        firstname: user.firstname,
        country: user.country,
        city: user.city,
        username: user.username,
        email: user.emailaddress,
        // Autres données de profil à ajouter ici
      };
      res.json({ success: true, user: userData });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error while fetching user profile' });
  }

  // Fermer la requête en envoyant la réponse
  res.end();
});

app.get("/demo", (req, res) => {
  res.end("reponse du serveur");
});

app.post("/fakevid", function (req, res) {
  const fakeVideos = [
    {
      id: 1,
      title: "Journey Through The Universe - HD Documentary",
      miniature:
        "https://imgs.search.brave.com/j_w-SCcubajyNDPpXf6TgVw3bReenqnQtJ8E9eDmO1M/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/c0pjYVNyallFSWEt/TTRhamRWZm5BSGFF/SyZwaWQ9QXBp",
      channel: "Roro",
      video:
        "https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4",
      tags: ["documentary", "space"],
      views: 10,
      release: "2022-03-23",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: "",
    },
    {
      id: 2,
      title: "Journey Through The Universe - HD Documentary",
      miniature:
        "https://imgs.search.brave.com/9lZjZtg--YsJPBSoOlhNUD00_gb4SsoQCASJLPaT-Ic/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/cUpTNTNiRkJLUldx/UlpFakhMY1R3SGFF/SyZwaWQ9QXBp",
      channel: "Ludwig",
      video:
        "https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4",
      tags: ["planet"],
      views: 10,
      release: "2022-03-23",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: "",
    },
    {
      id: 3,
      title:
        "Stunning New Universe Fly-Through Really Puts Things Into Perspective",
      miniature:
        "https://imgs.search.brave.com/dwikNKmv1gJpotOSRd7TLUMUY-xeCBxP6FORMumoXqI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/T1ZCZ1NHdUFFVUtt/RHJkMFRMeGtnSGFF/SyZwaWQ9QXBp",
      channel: "Maxime",
      video:
        "https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4",
      tags: ["galaxy", "space"],
      views: 10,
      release: "2022-03-23",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: "",
    },
    {
      id: 4,
      title:
        '"Celestial Relaxation" 1 HR of 4K NASA Space/Galaxy Footage + 432HZ Ambient Music',
      miniature:
        "https://imgs.search.brave.com/xrBPkPfs0RQj4PC259B81t-N_wefuBqtvhm2001eXg8/rs:fit:1200:1080:1/g:ce/aHR0cDovL2dldHdh/bGxwYXBlcnMuY29t/L3dhbGxwYXBlci9m/dWxsLzIvNi8yLzMy/NjM1OC5qcGc",
      channel: "Roro",
      video:
        "https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4",
      tags: ["music"],
      views: 10,
      release: "2022-03-23",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: false,
      duration: "",
    },
    {
      id: 5,
      title: "Starship Mission to Mars",
      miniature:
        "https://imgs.search.brave.com/H-9x8yEqk2DmU-x9DfbrpZkQ7bt7DlCkXzetQRhnbxw/rs:fit:1200:1080:1/g:ce/aHR0cDovL3dhbGxw/YXBlcmNhdmUuY29t/L3dwL2NmQkFCQXgu/anBn",
      channel: "Roro",
      video:
        "https://cdn.discordapp.com/attachments/673800952599281684/951416952008634418/T-T_1.mp4",
      tags: ["ship"],
      views: 10,
      release: "2022-03-23",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      short: true,
      duration: "",
    },
  ];

  const requestString = req.body.data;
  const regexString = requestString.replace(/ /g, "|").split("").join(".*");
  const regex = new RegExp(regexString, "i");
  const requestedVideos = fakeVideos.filter(
    (video) =>
      regex.test(video.title) ||
      regex.test(video.channel) ||
      video.tags.some((tag) => regex.test(tag))
  );

  if (requestedVideos.length > 0) {
    res.json(requestedVideos);
  }
});

// Optionnel a vous de voir pour vous adapter à votre problématique :

// app.get('/',(req,res)=>{

//     res.sendFile(path.join('nomDuDossierOuLeUserArrive', 'nomDuFichierSurLequelLeUserEstCenséAtterirDèsQuilEstSurLeSite.html'));
// })

app.post("/node/sub", (req, res) => {
  client.connect((err) => {
    async function run() {
      try {
        const database = client.db("BigOne");
        const movies = database.collection("enAttente");
        const query = req.body;
        await movies.insertOne(query);
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
  });

  res.end();
});

app.get("/demo", (req, res) => {
  console.log("test");
  res.end("reponse du serveur");
});
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(5600, () => console.log(`Server running on port: ${5600}`))
  )
  .catch((error) => console.log(error.message));
