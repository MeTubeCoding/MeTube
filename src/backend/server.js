

/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require("body-parser");
const path = require('path');
const { MongoClient, ServerApiVersion} = require('mongodb');
const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
require('./db');

const uri = process.env.URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({
  extended: true
}));


io.on('connection', (socket) => {
  console.log('Un utilisateur s\'est connecté');

  socket.on('disconnect', () => {
    console.log('Un utilisateur s\'est déconnecté');
  });

  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg);
  });
});

app.post('/chat',(req,res)=>{
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('LiveBdd');
        const messages = database.collection('messageChat');
        const query = req.body;
        await messages.insertOne(query);
      } finally {
        await client.close(); 
      }
    }
    run().catch(console.dir);
  });
  res.end();
});

app.post('/desc',(req,res)=>{
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('LiveBdd');
        const messages = database.collection('description');
        const query = req.body;
        await messages.insertOne(query);
      } finally {
        await client.close(); 
      }
    }
    run().catch(console.dir);
  });
  res.end();
});
      

app.get('/chat',(req,res)=>{
  client.connect(err => {
    async function runy() {
      try {
        const database = client.db('LiveBdd');
        const messages = database.collection('messageChat');
        let search = await messages.find({}).toArray();
        const reponseSearch = JSON.stringify(search);
        res.end(reponseSearch);
      } finally {
        await client.close(); 
      }
    }
    runy().catch(console.dir);
  });
});


httpServer.listen(5600,() => {
  console.clear();
  console.log('Server app listening on port 5600');
});
