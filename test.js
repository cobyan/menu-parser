#!/usr/bin/env node
colors = require ('colors');
jsdiff = require ('diff');
parser = require ('./parser');
chalk = require ('chalk');

const Menu = require ('./menu');
const sourceFileDatecode = require ('./menu-source-file');

const Datecode = require('./datecode');
const menuTestData = require('./menu-test-data');

let failed = 0, passed = 0;

menuTestData
  .map (td => {

  const menu = Menu.create(sourceFileDatecode(td.datecode), parser, 'text');
  
  const diff = Menu.compare(td.expected, menu.parsed);
  try {
    test('menu should be equal', () => {
      expect(diff.length).toBe(1);  
    });
  } catch(e) {

  }

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
