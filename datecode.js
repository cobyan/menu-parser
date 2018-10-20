const Datecode = {
  now: () => {
    //Number(`20${year}`), Number(month) -1, Number(day), 4,0,0
    const supDate = new Date();
    return `${supDate.getFullYear() - 2000}${supDate.getMonth() +1}${supDate.getUTCDate()}`;
  }
}

module.exports = Datecode;