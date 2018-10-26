const Datecode = require('./datecode');

function parser(menuSource, format = 'text') {
    if (!menuSource) return 'Undefined menu source';

    const menuRaw = menuSource;
  
    const menuLines = menuRaw.split("\n");
    const defaultPrimiPrice = '5,20';
    const defaultSecondiPrice = '7,20';
    const defaultDolcePrice = '4,20';

    let price;

    let primi = [];
    let secondi = [];
    let dolci = [];

    let blocks = {
        primi: {
            startIndex: 9999,
            isSpecial : false,
        },
        secondi: {
            startIndex: 9999,
            isSpecial: false,
        },
        dolci: {
            startIndex: 9999,
        }
    };
    let orderDate;
    menuLines
        .splice(0)
        .map((line, index) => {    

            const lineIndex = index;
            blocks.primi.isSpecial = false;
            blocks.secondi.isSpecial = false;

            if(!orderDate) {
                orderDate = line.match(/^([^\w]*MENÙ DI ([A-ZÌ 0-9]+).*)$/);
            }

            const primiHeader = line.match(/^[^\w]*PRIMI DA (?:EURO|€) ([\d,]+)/);
            if (primiHeader) {
                blocks.primi.startIndex = lineIndex;
                price = primiHeader[1];
            }
        
            let matchedLinePrimiSpecial 
                = line.match(/^([^\w]+[A-Z, “”]{6,}[a-z\(\), “”]+)EURO ([\d,]+)|([^\w]+[A-Z, Ù“”]{6,}[a-z\(\), ]*)/);

            if (matchedLinePrimiSpecial 
                && lineIndex > 5
                && (lineIndex > blocks.primi.startIndex || !primiHeader)
                && blocks.secondi.startIndex > lineIndex) {

                    primiDesc = matchedLinePrimiSpecial[1] || matchedLinePrimiSpecial[3];
                    primiSpecialPrice = price || matchedLinePrimiSpecial[2];
                    blocks.primi.isSpecial = true;

                    primi.push(`${primiDesc.trim()}: ${primiSpecialPrice.replace(",50", ",20")}`);
            }

            let matchedLinePrimiStandard = line.match(/^.? ([A-Za-z ,\(\)]+) EURO|^.? ([A-Za-z ,\(\)]+)/);
            if (matchedLinePrimiStandard 
                && (lineIndex < blocks.dolci.startIndex)
                && (lineIndex < blocks.secondi.startIndex)
                && (lineIndex > blocks.primi.startIndex || !primiHeader)
                && !blocks.primi.isSpecial) {

                    primiDesc = matchedLinePrimiStandard[1] || matchedLinePrimiStandard[2];

                primi.push(`${primiDesc.trim()}: ${defaultPrimiPrice}`);
            }

            const secondiHeader = line.match(/^SECONDI/);
            if (secondiHeader) {
                blocks.secondi.startIndex = lineIndex;
                //secondiBlockStartRow = index;
                primiBlockStartRow = 9999;
            }

            let matchedLineSecondiSpecial = line.match(/^[^\w ]+([A-Z ,]+) EURO ([\d,]+)[^\w]*$/);
            if (matchedLineSecondiSpecial 
                && lineIndex > blocks.secondi.startIndex) {
                    
                    const secondo = matchedLineSecondiSpecial[1].replace('EURO','').trim(); 
                    secondi.push(`${secondo}: ${matchedLineSecondiSpecial[2]}`);
                    secondiSpecialLastRow = index;
                    blocks.secondi.isSpecial = true;
            }
            
            let matchedLineSecondi = line.match(/^.? ([\S ]+)/);
            if (matchedLineSecondi 
                && lineIndex < blocks.dolci.startIndex
                && lineIndex > blocks.secondi.startIndex
                && !blocks.secondi.isSpecial) {

                const secondo = matchedLineSecondi[1].replace('EURO','').trim(); 
                secondi.push(`${secondo}: ${defaultSecondiPrice}`);
            }

            const dolciHeader = line.match(/^[^\w]*(?:Dolci|TORTE)/);
            if (dolciHeader) {
                blocks.dolci.startIndex = lineIndex;
            }

            let matchedLineDolci = line.match(/^[^\w]*([\S ]+)/);
            if (matchedLineDolci 
                && lineIndex > blocks.dolci.startIndex
                && lineIndex > blocks.secondi.startIndex
                && (lineIndex > blocks.primi.startIndex  || !primiHeader)){

                const dolce = matchedLineDolci[1].replace('EURO','').trim(); 
                dolci.push(`${dolce}: ${defaultDolcePrice}`);
            }
    });

    const datecode = Datecode.fromLongDate(orderDate[2].trim());
    const header = orderDate[0].trim();
    return {
        header,
        datecode,
        primi,
        secondi,
        dolci
    }
    //format = format || 'text';
    //return rend[format]({date: menu.date, primi, secondi, dolci});
    //return {datecode: menu.datecode, primi, secondi, dolci};
}

module.exports = parser;
