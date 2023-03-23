
// Cela va probablement un peu changer car il faut que je l'adapte pour typescript mais pour pouvez
// commencer à taffer la dessus y'aura juste quelque correction mineur à l'avenir le temps je règle le
// problème

const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require("body-parser");
const path = require('path');
const { query } = require('express');

const { MongoClient, ServerApiVersion, ObjectID } = require('mongodb');

const uri = "mongodb+srv://Baptiste:live2023@metube.1cfbpke.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const fs = require('fs');

var publi = path.join(__dirname, 'nom du dossier Public');

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
});

res.end("pute");

  
})



app.listen(5600,() => {
    console.log('Server app listening on port 5600');
});