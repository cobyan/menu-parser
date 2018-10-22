// server.js
// where your node app starts

// init project
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());

const Database = require('./database');
const Menu = require('./menu');
const parser = require('./parser');

const source = require ('./filemenusource');

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
  const menu = Menu.create(source(req.params.datecode), parser, 'text');
  res.send(menu.parsed);
});

app.post('/', function(request,response) {
  const source = Object.keys(request.body)[0];
  
  const menu = Menu.create(source, parser);
  
  Database.save(menu);
  response.send(menu);
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
