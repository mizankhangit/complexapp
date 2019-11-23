const mongodb = require('mongodb');
const dotenv = require('dotenv').config();

const url = process.env.CONNECTIONSTRING;

mongodb.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    module.exports = client;
    const app = require('./app');
    app.listen(process.env.PORT, () =>
      console.log(`App is running on port ${process.env.PORT}`)
    );
  }
);
