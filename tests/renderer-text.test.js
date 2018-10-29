const rendererText = require('../lib/renderer/renderer-text');

test('it should do something', () => {
    const values = {header: 'date', primi: ['a','b'], secondi: ['c', 'd'], dolci: ['e','f']};
    const expected = `${values.header}\n\n *** PRIMI ***\n\n${values.primi.join("\n")}\n\n *** SECONDI ***\n\n${values.secondi.join("\n")}\n\n *** DOLCI ***\n\n${values.dolci.join("\n")}`;
    expect(rendererText(values)).toEqual(expected);
})

