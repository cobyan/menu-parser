var program = require('commander');
 
program
  .version('0.1.0', '-v, --version')
  .usage('[options] <date>')
  .option('-f, --format <format>', 'Output format (markdown or text)', /^md|text$/, 'text')
  .parse(process.argv);

const date = program.args[0];

validateParamDate = (date) => {
    const year = date.substring(0,2);
    const month = date.substring(2,4);
    const day = date.substring(4,6);
    
    const supDate = new Date(Number(`20${year}`), Number(month) -1, Number(day), 4,0,0);

    const valYear = supDate.getFullYear() == Number(`20${year}`);
    const valMonth = supDate.getMonth() == Number(month) -1;
    const valDay = supDate.getUTCDate() == Number(day);

    return valYear && valMonth && valDay;
}

if (!validateParamDate(date)) {
    console.log('Invalid date');
    return;
}

fa = require('./lib');
const formattedMenu = fa('./sampleMenu/menu-' + date + '.txt', program.format);
if(formattedMenu) {
    console.log(formattedMenu);
}
