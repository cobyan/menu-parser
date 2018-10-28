const Datecode = require('../lib/datecode');

test('should return today datecode', () => {
    supDate = new Date();
    expect(Datecode.now()).toEqual(`${supDate.getFullYear() - 2000}${supDate.getMonth() +1}${supDate.getUTCDate()}`);
});

test('should return datecode parts', () => {
    expect(Datecode.split('181011')).toEqual({
        year: '18', month: '10', day: '11'
    })
});

test('should determine if a datecode is valid', () => {
    expect(Datecode.validate('181021')).toBeTruthy();
    
    // no wrong date formats
    expect(Datecode.validate('181311')).toBeFalsy();
    
    // datecode is a 6 chars string
    expect(Datecode.validate('18101')).toBeFalsy();
    
    // datecode isn't a future date
    expect(Datecode.validate('191101')).toBeFalsy();
});

test('should be convertible to filename', () => {
    expect(Datecode.toFilename('181018')).toMatch(/181018.txt$/);

    // no wrong date formats
    expect(Datecode.toFilename('181311')).toBeFalsy();
    
     // datecode is a 6 chars string
     expect(Datecode.toFilename('18101')).toBeFalsy();
     
     // datecode isn't a future date
     expect(Datecode.toFilename('191101')).toBeFalsy();

     expect(Datecode.fromLongDate('MERCOLEDÌ 18 OTTOBRE')).toBe('181018');
});

