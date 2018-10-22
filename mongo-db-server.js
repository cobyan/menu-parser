const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const uri = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DBHOSTPORT+'/'+process.env.DB;

module.exports = { 
  connect: function(callback) {
    MongoClient.connect(uri, callback)
  } 
};

