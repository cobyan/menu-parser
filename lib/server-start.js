// init project
const express = require('express');
const bodyParser = require("body-parser");
const chalk = require('chalk');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());



// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log(chalk.blue('Listening on port ' + chalk.bold(listener.address().port)));
});

module.exports = app;