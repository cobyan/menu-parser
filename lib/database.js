const assert = require('assert');
const db = require('./mongo-db-server');
const menus = require('./menu');


const Database = {
    save: (menu) => {
        const connected = function(err, client) {
          assert.equal(null,err);
          console.log('connected successfully');
          const db = client.db(process.env.DB);

          // save menu to db
          menus.insert(menu, db, function() { client.close(); })
        }
        db.connect(connected);
    }
  };

module.exports = Database;