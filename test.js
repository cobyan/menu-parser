#!/usr/bin/env node

colors = require ('colors');
jsdiff = require ('diff');
parser = require ('./parser');
chalk = require ('chalk');

const Menu = require ('./menu');
const source = require ('./filemenusource');
const Datecode = require('./datecode');
const menuTestData = require('./menu-test-data');

let failed = 0, passed = 0;

menuTestData.map (test => {
  //    let one = parser(menu.filename);

  const date = test.date;
  const menu = Menu.create (source (date), parser, 'text');
  let one = menu.parsed;

  let other = test.expected;
  var diff = jsdiff.diffChars(other, one);

  console.log (
    chalk[diff.length === 1 ? 'green' : 'red'] (Datecode.toFilename (test.date))
  );
  if (diff.length > 1) {
    failed++;
    diff.forEach (function (part) {
      // green for additions, red for deletions
      // grey for common parts
      var color = part.added ? 'green' : part.removed ? 'red' : 'grey';

      process.stderr.write (part.value[color]);
    });

    console.log ();
    console.log (diff);
  } else {
    passed++;
  }
});

console.log (`⚡ ${failed + passed} Tests: ${failed} failed, ${passed} passed.`);
