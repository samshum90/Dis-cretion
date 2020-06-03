const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const path = require('path');
const serveStatic = require('serve-static');
// const history = require('connect-history-api-fallback')


app.use(serveStatic(__dirname + "../dist"));
app.use(bodyParser.json());
app.use(cors());
// app.use(history())


MongoClient.connect('mongodb://35.192.137.226:3000')
  .then((client) => {
    const db = client.db('flexible_work');
    const requestsCollection = db.collection('response');
    console.log(requestsCollection)
    const requestsRouter = createRouter(requestsCollection);
    app.use('/', requestsRouter);
  })
  .catch(console.err);

  app.engine('html', require('ejs').renderFile);

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`App running on port ${ this.address().port }`);
});