const assert = require('assert');

module.exports = function (request) {
  const source = Object.keys(request.body)[0];
  
  try {
    assert.ok(source);
  } catch (e) {
    throw new Error('Invalid source');
  }
  
  return source; 
}