
const {google} = require('googleapis');
const authorizedSession = require('./lib/google-auth');

authorizedSession(printString);

function printString(auth) {
    const sheets = google.sheets({version: 'v4', auth});

    let values = [
        [
            '🍇 MENÙ DI MARTEDÌ 231 OTTOBRE 🍇'
        ],
        // Additional rows ...
      ];
      const resource = {
        values,
      };
      sheets.spreadsheets.values.update({
        spreadsheetId: '1_eCayZ854K9kJzqpyfY02idrO7DWVMjpu6ijuZQq9_U',
        range: 'Foglio4!H2:L4',
        valueInputOption: 'USER_ENTERED',
        resource,
      }, (err, result) => {
        if (err) {
          // Handle error
          console.log(err);
        } else {
          console.log('%d cells updated.', result.updatedCells);
        }
      });

      values = [
          [
            '1- MINESTRONE DI VERDURE FRESCHE',null,'15'
          ],
          [
            '2- MINESTRONE DI VERDURE FRESCHE',null,'25'
          ],
          [
            ''
          ],
          [
            'SECONDI','',''
          ],
          

        
        // Additional rows ...
      ];
      const resource2 = {
        values,
      };
      sheets.spreadsheets.values.update({
        spreadsheetId: '1_eCayZ854K9kJzqpyfY02idrO7DWVMjpu6ijuZQq9_U',
        range: 'Foglio4!I10:K20',
        valueInputOption: 'USER_ENTERED',
        resource: resource2,
      }, (err, result) => {
        if (err) {
          // Handle error
          console.log(err);
        } else {
          console.log('%d cells updated.', result.updatedCells);
        }
      });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function listMajors(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  /*
  sheets.spreadsheets.values.get({
    spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
    range: 'Class Data!A2:E',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name, Major:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row[0]}, ${row[4]}`);
      });
    } else {
      console.log('No data found.');
    }
  });
  */
}