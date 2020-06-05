const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback')


app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.json());
app.use(cors());
app.use(history())

  app.engine('html', require('ejs').renderFile);

  var port = process.env.PORT || 80;
app.listen(port, function () {
  console.log(`App running on port ${ this.address().port }`);
});