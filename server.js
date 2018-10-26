// server.js
// where your node app starts

// init project
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());

const Database = require('./lib/database');
const Menu = require('./lib/menu');
const parser = require('./lib/parser');
const sourceFileDatecode = require ('./menu-source-file');
const sourceRequest = require('./menu-source-request');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/menu/:datecode(\\d{6,6})', function(req, res) {
  console.log(req.params);
  const menu = Menu.create(sourceFileDatecode(req.params.datecode), parser, 'text');
  res.send(menu.parsed);
});

app.get('/gsheets', function(req, res) {
  const g = require('./quickstart-gsheets');
});
app.post('/', function(request,response) {
  
  let source;
  
  try {
    source = sourceRequest(request);
  } catch(e) {
    response.status(400).send(e.message);
    return;
  }
  
  const menu = Menu.create(source, parser);
  Database.save(menu);
  response.send(menu);
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
