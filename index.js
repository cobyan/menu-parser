#!/usr/bin/env node
const program = require('commander');
const Datecode = require('./datecode');
const parser = require('./parser');
const Menu = require('./menu');
const source = require('./filemenusource');

program
  .version('0.2.0', '-v, --version')
  .usage('[options] [date]')
  .option('-f, --format <format>', 'Output format (markdown or text)', /^md|text$/, 'text')
  .parse(process.argv);

const datecode = program.args[0] || Datecode.now();
if (!Datecode.validate(datecode)) {
    console.log('Invalid date');
    return;
}

const menu = Menu.create(source(datecode), parser, program.format);

if(menu.parsed) {
    console.log(menu.parsed);
}
