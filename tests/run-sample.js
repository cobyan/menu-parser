#!/usr/bin/env node
colors = require ('colors');
jsdiff = require ('diff');
parser = require ('../lib/parser');
chalk = require ('chalk');

const Menu = require ('../lib/menu/menu');
const sourceFileDatecode = require ('../lib/menu/menu-source-file');

const Datecode = require('../lib/datecode');
const menuTestData = require('../lib/menu/menu-test-data');

let failed = 0, passed = 0;

menuTestData
  .map (td => {

    let source;
    try {
      source = sourceFileDatecode(td.datecode);
    } catch(e) {
      console.log('Menu not found', e.message); return;
    }

    let menu = Menu.create(source, parser, 'text');
    let diff = Menu.compare(td.expected, menu.parsed);
    
    try {
      test('menu should be equal', () => {
        expect(diff.length).toBe(1);  
      });
    } catch(e) {

    }

    menu = Menu.create(source, parser, 'text');

    console.log (
      chalk[diff.length === 1 ? 'green' : 'red'] (Datecode.toFilename (td.datecode))
    );

    if (diff.length > 1) {
      failed++;
      diff.forEach (function (part) {
        // green for additions, red for deletions
        // grey for common parts
        var color = part.added ? 'green' : part.removed ? 'red' : 'grey';

        process.stderr.write(part.value[color]);
      });

      console.log ();
      console.log (diff);
    } else {
      passed++;
    }
  
});

console.log (`${chalk.yellow.bold('⚡')} ${failed + passed} Tests: ${failed > 0 ? `${chalk.red.bold(`${failed} failed`)}`: `${failed} failed`} ${passed > 0 ? `${chalk.green.bold(`${passed} passed`)}`: `${passed} passed`}`);
