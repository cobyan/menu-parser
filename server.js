// server.js
// where your node app starts

const app = require('./lib/server-start');

const Gsheet = require('./lib/gsheet');
const Slack = require('./lib/slack');
const Datecode = require('./lib/datecode');
const Database = require('./lib/database');
const Menu = require('./lib/menu/menu');
const parser = require('./lib/parser');
const sourceFileDatecode = require ('./lib/menu/menu-source-file');
const sourceRequest = require('./lib/menu/menu-source-request');
const config = require('./config');

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/menu/:datecode(\\d{6,6})', function(req, res) {
  const menu = Menu.create(sourceFileDatecode(Datecode.toFilename(req.params.datecode)), parser, 'text');
  res.send(menu.parsed);
});

app.post('/', function(request,response) {
  
  let source;
  
  try {
    source = sourceRequest(request);
  } catch(e) {
    response.status(400).send(e.message);
    return;
  }
  
  const menu = Menu.create(source.raw, parser);
  // 1. Save to DB
  config.useDb && Database.save(menu);

  // 2. Update Gsheet
  config.useGsheet && Gsheet.write(menu.parsed.gsheet);

  // 3. notify Slack
  config.useSlack && Slack.postMenu(menu.parsed.slack, 
    'Bar Milano', 
    'warning', 
    config.gsheet.url);
  

  //response.send(menu);
  response.send('menu posted')
  
});


