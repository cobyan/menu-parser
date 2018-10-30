#!/usr/bin/env node

const fs = require('fs');
const child_process = require('child_process');
const Datecode = require('./lib/datecode');
const Menu = require('./lib/menu/menu');
const source = require('./lib/menu/menu-source-file');
const parser = require('./lib/parser');

const editor = process.env.EDITOR || 'vi';
const datecode = '191010' || Datecode.now(); console.log(datecode);

const menuFileRelPath = Datecode.filePath(datecode);

var child = child_process.spawn(editor, [menuFileRelPath], {
    stdio: 'inherit'
});

child.on('exit', function (e, code) {

    const menu = Menu.create(source(menuFileRelPath), parser);

    fs.writeFileSync(menuFileRelPath + '.out', menu.parsed.text, 'utf8');

    console.log("finished");
});