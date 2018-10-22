const Datecode = {
  now: () => {
    //Number(`20${year}`), Number(month) -1, Number(day), 4,0,0
    const supDate = new Date();
    return `${supDate.getFullYear() - 2000}${supDate.getMonth() +1}${supDate.getUTCDate()}`;
  },
  
  validate: (datecode) => {
    const date = datecode;
    const year = date.substring(0,2);
    const month = date.substring(2,4);
    const day = date.substring(4,6);
    
    const supDate = new Date(Number(`20${year}`), Number(month) -1, Number(day), 4,0,0);

    const valYear = supDate.getFullYear() == Number(`20${year}`);
    const valMonth = supDate.getMonth() == Number(month) -1;
    const valDay = supDate.getUTCDate() == Number(day);

    return valYear && valMonth && valDay;
  },
  toFilename: (datecode) => {
    if(Datecode.validate(datecode)) {
      return `./sampleMenu/menu-${datecode}.txt`;
    } 
  }
}

module.exports = Datecode;