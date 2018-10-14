var program = require('commander');
 
program
  .version('0.1.0')
  .option('-f, --format <format>', 'Output format (markdown or text)', /^md|text$/, 'text')
  .parse(process.argv);


fa = require('./lib');
console.log(fa('./menu-181012.txt', program.format));