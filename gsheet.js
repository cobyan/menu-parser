const {google} = require ('googleapis');
const authorizedSession = require ('./lib/google-auth');

const menu = {
  header: '🍇 MENÙ DI MARTEDÌ 241 OTTOBRE 🍇',
  primi: ['primo primo', 'secondo primo', 'terzo primo'],
  secondi: ['primo secondo', 'secondo secondo', 'terzo secondo'],
  dolci: ['primo dolce', 'secondo dolce', 'terzo dolce'],
};

let filler = (fill, length) => {
    const toFill = new Array(length);
    return toFill.fill(fill);
}
const fillLength = 29-7-menu.primi.length-menu.secondi.length-menu.dolci.length-2-2;

const spreadsheetMap = {
  'Foglio2!H2:L4': [[menu.header]],
  'Foglio2!I7:K29': [
    ['PRIMI', '', ''],
    ...menu.primi.map (i => [i, null, '10']),
    ['','',''],
    ['SECONDI','',''],
    ...menu.secondi.map ((i, k) => [i, null, '8']),
    ['','',''],
    ['DOLCI','',''],
    ...menu.dolci.map ((i, k) => [i, null, '5']),
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

authorizedSession (printString);

function printString (auth) {
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
