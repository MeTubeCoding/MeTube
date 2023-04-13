
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose')
// console.log(process.env.DB_USER_PASS)

mongoose
  .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@metube.1cfbpke.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB', err))
