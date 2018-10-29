const Datecode = require('../datecode');
const rend = require('../renderer/renderer');
console.log(rend);
const assert = require('assert');
const jsdiff = require('diff');

const menus = {
// parse menu
  parse: (from, parser, format = null) => {
    let parsedFormats;
    const parsed = parser(from);
    if (format) {
      console.log(format);
      parsedFormats = rend[format](parsed);
    } else {
      parsedFormats = { 
        text: rend['text'](parsed), 
        md: rend['md'](parsed) 
      }
    }
    let datecode = parsed.datecode;
    return {datecode, parsed: parsedFormats};
  },

  create: (from, parser, format = null) => {

    const parsedMenu = menus.parse(from, parser, format);
        
    return {
      raw: from,
      parsed: parsedMenu.parsed,
      datecode: parsedMenu.datecode
    }
  },

  compare: (one, other) => jsdiff.diffChars(one, other),
  
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
/*  
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
  */
};

module.exports = menus;