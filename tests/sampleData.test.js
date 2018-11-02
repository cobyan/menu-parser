const Menu = require ('../lib/menu/menu');
const sourceFileDatecode = require ('../lib/menu/menu-source-file');
const Datecode = require('../lib/datecode');
//const menuTestData = require('../lib/menu/menu-test-data');
const samples = require('../lib/samples');
var files = samples.files;

test('menu should be equal', () => {

  files
    .map (file => {
      
      if (!file.match (/txt$/)) return;
      sample = samples.run(file);
      expect(sample.diff.length).toEqual(1);
    });

});

test('r', () => {
  expect(() => samples.run('rr')).toThrow();
})