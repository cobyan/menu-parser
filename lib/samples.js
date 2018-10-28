const fs = require('fs');
const sourceFileDatecode = require ('../lib/menu/menu-source-file');
const Menu = require ('../lib/menu/menu');
const parser = require ('../lib/parser');

const files = fs.readdirSync (__dirname + '/../sampleMenu');

const run = file => {

  const fileDir = 'sampleMenu/' + file;
  const outfileDir = fileDir + '.out';
  const outfileRelPath = __dirname + '/../' + outfileDir;
  let diff;

  try {
    fs.statSync (outfileRelPath);
    expected = fs.readFileSync (outfileDir, {encoding: 'utf8'});
    const source = sourceFileDatecode (fileDir);
    const menu = Menu.create (source, parser, 'text');
    diff = Menu.compare (expected, menu.parsed);
  } catch (e) {
    //console.log (e.message);
    throw new Error(e);
  }

  return {diff, fileDir};
};

module.exports = {
    files, run
}