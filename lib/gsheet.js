const {google} = require ('googleapis');
const authorizedSession = require ('./google-auth');
const config = require ('../config');
const chalk = require ('chalk');

function write (spreadsheetMap) {  

  const printString = auth => {
    const sheets = google.sheets ({version: 'v4', auth});

    for (const target in spreadsheetMap) {
      
      if (spreadsheetMap.hasOwnProperty (target)) {
        let values = spreadsheetMap[target]['values'];

        if (values == 'clear') {
          sheets.spreadsheets.values.clear ({
            spreadsheetId: config.gsheet.id,
            range: spreadsheetMap[target]['range'],
          });
        } else {
          const resource = {
            values,
          };
          sheets.spreadsheets.values.update (
            {
              range: spreadsheetMap[target]['range'],
              resource,
              spreadsheetId: config.gsheet.id,
              valueInputOption: 'USER_ENTERED',
            },
            (err, result) => {
    
              if (err) {
                // Handle error
                console.log (
                  chalk.bold.white (__filename.replace (__dirname, '')),
                  chalk.red('Error',
                            err));
              } else {
                console.log (
                  chalk.bold (__filename.replace (__dirname, '')),
                  chalk.green (`${target} updated`), 
                  chalk.grey(`${result.data.updatedCells} cells`));
              }
            }
          );
        }
      }
    }
  };

  authorizedSession (printString);
}

module.exports = {write};
