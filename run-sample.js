#!/usr/bin/env node
const chalk = require ('chalk');
const fs = require('fs');

const samples = require('./lib/samples');

const files = samples.files;

let failed = 0, passed = 0;

files.map(file => {

  if (!file.match (/txt$/)) return;

  sample = samples.run(file);
  
  if(!sample) return;

  console.log (
    chalk[sample.diff.length === 1 ? 'green' : 'red'] (sample.fileDir)
  );

  if (sample.diff.length > 1) {
    failed++;
    sample.diff.forEach (function (part) {
      // green for additions, red for deletions
      // grey for common parts
      var color = part.added ? 'green' : part.removed ? 'red' : 'grey';

      process.stderr.write(part.value[color]);
    });

    console.log ();
    console.log (sample.diff);
  } else {
    passed++;
  }
  
});

console.log (`${chalk.yellow.bold('⚡')} ${failed + passed} Tests: ${failed > 0 ? `${chalk.red.bold(`${failed} failed`)}`: `${failed} failed`} ${passed > 0 ? `${chalk.green.bold(`${passed} passed`)}`: `${passed} passed`}`);