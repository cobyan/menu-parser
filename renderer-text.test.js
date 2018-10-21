const rendererText = require('./renderer-text');

test('it should do something', () => {
    const values = {date: 'date', primi: ['a','b'], secondi: ['c', 'd'], dolci: ['e','f']};
    const expected = `${values.date}\n\n *** PRIMI ***\n\n${values.primi.join("\n")}\n\n *** SECONDI ***\n\n${values.secondi.join("\n")}\n\n *** DOLCI ***\n\n${values.dolci.join("\n")}`;
    expect(rendererText(values)).toEqual(expected);
})

