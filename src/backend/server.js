

/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require("body-parser");
const path = require('path');

const { MongoClient, ServerApiVersion} = require('mongodb');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
require('./db');

const uri = process.env.URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}

app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(cors(corsOptions));

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

app.post('/moderation',(req,res)=>{
  client.connect(err => {
    async function run() {
      try {
        const database = client.db('LiveBdd');
        const messages = database.collection('messageModeration');
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

app.get('/moderation',(req,res)=>{
  client.connect(err => {
    async function runy() {
      try {
        const database = client.db('LiveBdd');
        const messages = database.collection('messageModeration');
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


app.listen(5600,() => {
  console.clear();
  console.log('Server app listening on port 5600');
});
