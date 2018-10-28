#!/usr/bin/env node
const program = require('commander');
const Datecode = require('./lib/datecode');
const parser = require('./lib/parser');
const Menu = require('./lib/menu/menu');
const source = require('./lib/menu/menu-source-file');

program
  .version('0.2.0', '-v, --version')
  .usage('[options] [date]')
  .option('-f, --format <format>', 'Output format (markdown or text)', /^md|text$/, 'text')
  .parse(process.argv);

const datecode = program.args[0] || Datecode.now();

const menuFileRelPath = Datecode.toFilename(datecode);
/*
if (!Datecode.validate(datecode)) {
    console.log('Invalid date');
    return;
}
*/
const menu = Menu.create(source(menuFileRelPath), parser, program.format);

if(menu.parsed) {
    console.log(menu.parsed);
}
