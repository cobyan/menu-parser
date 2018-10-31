#!/usr/bin/env node

const fs = require('fs');
const child_process = require('child_process');
const Datecode = require('./lib/datecode');
const Menu = require('./lib/menu/menu');
const source = require('./lib/menu/menu-source-file');
const parser = require('./lib/parser');
const chalk = require ('chalk');

const editor = process.env.EDITOR || 'vi';
const datecode = Datecode.now();

const menuFileRelPath = Datecode.filePath(datecode);

var child = child_process.spawn(editor, [menuFileRelPath], {
    stdio: 'inherit'
});

child.on('exit', function (e, code) {
    let menu;
    try{
        menu = Menu.create(source(menuFileRelPath), parser);
    } catch(e) {
        console.log(chalk.grey('No new menu'));
        return;
    }


    fs.writeFileSync(menuFileRelPath + '.out', menu.parsed.text, 'utf8');

    console.log(chalk.green("✔ sample menu "+datecode+" created"));
});