const assert = require('assert');

module.exports = function (request) {
  console.log(request.body);
//  const source = Object.keys(request.body)[0];
    const source = request.body['w'];
  
  try {
    assert.ok(source);
  } catch (e) {
    throw new Error('Invalid source');
  }
  
  return source; 
}