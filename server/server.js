const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const path = require('path');
const serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('Hr_requests');
    const requestsCollection = db.collection('requests');
    const requestsRouter = createRouter(requestsCollection);
    app.use('/api/requests', requestsRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});