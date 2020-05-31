const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./server/helpers/create_router.js');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback')

app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.json());
app.use(cors());
app.use(history())

const requests = require('./server/helpers/create_router');

app.use('/api/requests', requests);


MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
  .then((client) => {
    const db = client.db('Hr_requests');
    const requestsCollection = db.collection('requests');
    const requestsRouter = createRouter(requestsCollection);
    app.use('/api/requests', requestsRouter);
  })
  .catch(console.err);

  app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/index.html'))
  })

  var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`App running on port ${ this.address().port }`);
});
