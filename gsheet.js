const {google} = require ('googleapis');
const authorizedSession = require ('./lib/google-auth');
/*
const menu = {
  header: '🍇 MENÙ DI MARTEDÌ 241 OTTOBRE 🍇',
  primi: ['primo primo: 6,20', 'secondo primo: 5,00', 'terzo primo: 5,20'],
  secondi: ['primo secondo: 7,20', 'secondo secondo: 7,00', 'terzo secondo: 7,20'],
  dolci: ['primo dolce: 4,20', 'secondo dolce: 4,20', 'terzo dolce: 4,20'],
};
*/

const filler = (fill, length) => {
    const toFill = new Array(length);
    return toFill.fill(fill);
};

function writeSpreadsheet(menu) {

    const fillLength = 29-7-menu.primi.length-menu.secondi.length-menu.dolci.length-2-2;

    const row = (i) => {
        const splitted = i.split(":");
        return [splitted[0],"€",splitted[1]];
    };
    //console.log(...menu.primi.map (i => row(i)));return;

    const spreadsheetMap = {
        'Foglio2!B5': [[menu.dateLong]],
        'Foglio2!H2:L4': [[menu.header]],
        'Foglio2!I7:K29': [
          ['PRIMI', '', ''],
          ...menu.primi.map (i => row(i)),
          ['','',''],
          ['SECONDI','',''],
          ...menu.secondi.map ((i, k) => row(i)),
          ['','',''],
          ['DOLCI','',''],
          ...menu.dolci.map ((i, k) => row(i)),
          ...filler(['','',''], fillLength)
        ],
      };
      
      const errorHandler = (err, result) => {
        if (err) {
          // Handle error
          console.log (err);
        } else {
          console.log ('%d cells updated.', result.updatedCells);
        }
      };
      
      const printString = (auth) => {
        const sheets = google.sheets ({version: 'v4', auth});
      
        for (const range in spreadsheetMap) {
          if (spreadsheetMap.hasOwnProperty (range)) {
            let values = spreadsheetMap[range];
            const resource = {
              values,
            };
            sheets.spreadsheets.values.update (
              {
                range,
                resource,
                spreadsheetId: '1_eCayZ854K9kJzqpyfY02idrO7DWVMjpu6ijuZQq9_U',
                valueInputOption: 'USER_ENTERED',
              },
              errorHandler
            );
          }
        }
      }
      
      authorizedSession (printString);
}

//writeSpreadsheet(menu);

module.exports = writeSpreadsheet;