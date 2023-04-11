
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
          const movies = database.collection('messageChat');
        //   console.log("mongo connect")
          const query = req.body;
        //   console.log(query); 
          await movies.insertOne(query);
        //   console.log(movie);
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close(); 
        }
      }
      run().catch(console.dir);
})


res.end();

  
})

app.get('/chat',(req,res)=>{

  client.connect(err => {

    async function runy() {
        try {
          const database = client.db('LiveBdd');
          const movies = database.collection('messageChat');
        //   console.log("mongo connect")
        //   console.log(query); 
        search = await movies.find({}).toArray();
        console.log(search)
        //   console.log(movie);
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close(); 
        }
      }
      runy().catch(console.dir);
});
  res.end();
})


app.listen(5600,() => {
    console.log('Server app listening on port 5600');
});