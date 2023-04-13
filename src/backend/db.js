/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-var-requires */

const mongoose = require('mongoose')
// console.log(process.env.DB_USER_PASS);

mongoose
  .connect(
    process.env.DB_USER_PASS,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    err => {
      if (err) {
        console.error(err)
      } else {
        console.log('Connected to MongoDB...')
      }
    }
  )

  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB', err))
