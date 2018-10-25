const Datecode = {
  
  now: () => {
    //Number(`20${year}`), Number(month) -1, Number(day), 4,0,0
    const supDate = new Date();
    return `${supDate.getFullYear() - 2000}${supDate.getMonth() +1}${supDate.getUTCDate()}`;
  },

  split: (datecode) => {
    const year = datecode.substring(0,2);
    const month = datecode.substring(2,4);
    const day = datecode.substring(4,6);
    return {year, month, day};
  },

  toDate: (datecode) => {
    const {year, month, day} = Datecode.split(datecode);

    return new Date(Number(`20${year}`), Number(month) -1, Number(day), 4,0,0);
  },

  validate: (datecode) => {
    
    const {year, month, day} = Datecode.split(datecode);
    
    const supDate = Datecode.toDate(datecode);

    const valYear = supDate.getFullYear() == Number(`20${year}`);
    const valMonth = supDate.getMonth() == Number(month) -1;
    const valDay = supDate.getUTCDate() == Number(day);

    return valYear && valMonth && valDay;
  },
  toFilename: (datecode) => {
    if(Datecode.validate(datecode)) {
      return `./sampleMenu/menu-${datecode}.txt`;
    } 
  },
  fromLongDate: (longdate) => {
    const months = [
      'GENNAIO', 
      'FEBBRAIO',
      'MARZO',
      'APRILE',
      'MAGGIO',
      'GIUGNO',
      'LUGLIO',
      'AGOSTO',
      'SETTEMBRE',
      'OTTOBRE',
      'NOVEMBRE',
      'DICEMBRE'
    ];

    const splitted = longdate.split(" ");

    const y = '18';
    const m = months.indexOf(splitted[2].trim())+1;
    const d = splitted[1].trim();
    return `${y}${m}${d}`;
  }
}

module.exports = Datecode;