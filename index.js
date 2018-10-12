const fs = require('fs');

const menuRaw = fs.readFileSync('./menu2.txt', {encoding: 'utf8'});

const orderDate = menuRaw.match('MENÙ DI ([A-ZÌ 0-9]+)');
console.log('data di oggi: ', orderDate[1].trim());

menuLines = menuRaw.split("\n");
const defaultPrimiPrice = '5,50';
const defaultSecondiPrice = '7,50';

let primiBlockStartRow = 9999;
let secondiBlockStartRow = 9999;
let secondiSpecialLastRow = 9999;

let price;

let primi = [];
let secondi = [];

let blocks = {
    primi: {
        startIndex: 9999,
    },
    secondi: {
        startIndex: 9999,
    },
    secondi_special: {}
};
menuLines
//    .splice(22)
    .map((line, index) => {    
        const lineIndex = index;

        const primiHeader = line.match(/^PRIMI DA EURO ([\d,]+)/);
        if (primiHeader) {
            blocks.primi.startIndex = lineIndex;
    //        primiBlockStartRow = index;
            price = primiHeader[1];
        }

        let matchedLinePrimiSpecial = line.match(/^[^\w]+([A-Z ,]+)EURO ([\d,]+)$/);
//        let matchedLinePrimiSpecial = line.match(/^[\* ]+([A-Z "]+)/);
        if (matchedLinePrimiSpecial 
            && (lineIndex > blocks.primi.startIndex || !primiHeader)
            && blocks.secondi.startIndex < lineIndex) {
            primi.push(`${matchedLinePrimiSpecial[1]}: ${matchedLinePrimiSpecial[2]}`);
        }

        let matchedLinePrimiStandard = line.match('^.? ([A-Za-z ,]+)');
        if (matchedLinePrimiStandard 
            && (lineIndex < blocks.secondi.startIndex)
            && (lineIndex > blocks.primi.startIndex || !primiHeader)) {
            primi.push(`${matchedLinePrimiStandard[1]}: ${defaultPrimiPrice}`);
        }

        const secondiHeader = line.match(/^SECONDI/);
        if (secondiHeader) {
            blocks.secondi.startIndex = lineIndex;
            //secondiBlockStartRow = index;
            primiBlockStartRow = 9999;
        }

        let matchedLineSecondiSpecial = line.match(/^[^\w]+([A-Z ,]+)EURO ([\d,]+)$/);
        if (matchedLineSecondiSpecial 
            && lineIndex > blocks.secondi.startIndex) {

            const secondo = matchedLineSecondiSpecial[1].replace('EURO','').trim(); 
            secondi.push(`## ${secondo}: ${matchedLineSecondiSpecial[2]}`);
            secondiSpecialLastRow = index;
        }
        
        let matchedLineSecondi = line.match(/^.? ([A-Za-z ,]+)/);
        if (matchedLineSecondi 
            && lineIndex > blocks.secondi.startIndex) {

            const secondo = matchedLineSecondi[1].replace('EURO','').trim(); 
            secondi.push(`# ${secondo}: ${defaultSecondiPrice}`);
        }
});

console.log(" *** PRIMI ***");
primi.map(primo => console.log(primo))
console.log(" *** SECONDI ***");
secondi.map(secondo => console.log(secondo))


