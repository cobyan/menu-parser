const source = require('../lib/menu/menu-source-file');
const Datecode = require('../lib/datecode');

test('it should open sampleMenu file', () => {
    const menuFilePathRel = Datecode.toFilename('181018');
    expect(source(menuFilePathRel)).toBeTruthy();
});

test('it should open only valid files', () => {
    
    expect(() => source(null)).toThrow('no such file or directory');
    expect(() => source('171010')).toThrowError('no such file or directory');
    expect(() => source('aaa')).toThrow();
    expect(() => source('..')).toThrow();
});