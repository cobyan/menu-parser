const RendererGsheet = (values) => {

    const fillLength = 29-7-values.primi.length-values.secondi.length-values.dolci.length-2-2;

    const filler = (fill, length) => {
        const toFill = new Array(length);
        return toFill.fill(fill);
    };

    const row = (i) => {
        const splitted = i.split(":");
        return [splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1).toLowerCase(),
                "€",
                splitted[1]];
    };

    return {
        dateLong: {
            range: 'BarMilano!B4', 
            values: [[values.dateLong]]},
        header: {
            range: 'BarMilano!H2:L4', 
            values: [[values.header]]},
        menu: {
            range: 'BarMilano!I7:K29', 
            values: [
                ['PRIMI', '', ''],
                ...values.primi.map (i => row(i)),
                ['','',''],
                ['SECONDI','',''],
                ...values.secondi.map ((i, k) => row(i)),
                ['','',''],
                ['DOLCI','',''],
                ...values.dolci.map ((i, k) => row(i)),
                ...filler(['','',''], fillLength)]},
        reset: {
            range: 'BarMilano!B9:E48', 
            values: 'clear'}
      };
}

module.exports = RendererGsheet;