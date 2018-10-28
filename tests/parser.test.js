const parser = require('../lib/parser');

test('it should recognize invalid sources', () => {
    const a = null;
    expect(() => parser(a)).toThrow();
});