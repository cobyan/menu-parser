const parser = require('./lib');
const Datecode = require('./datecode');
const assert = require('assert');

const menus = {
// parse menu
  create: (from) => {
    return {
      raw: from,
      parsed: parser(from),
      datecode: Datecode.now(),
    }
  },
  
  insert: (data, db, callback) => {
    // Get the documents collection
    const collection = db.collection('menus');
    // Insert some documents
    collection.insertOne(data, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      assert.equal(1, result.ops.length);
      console.log("Inserted 1 document into the collection");
      callback(result);
    });
  },
  
  insertDocuments: (db, callback) => {
    // Get the documents collection
    const collection = db.collection('menus');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }
};

module.exports = menus;