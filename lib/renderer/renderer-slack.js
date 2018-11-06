const RendererSlack = (values) => {

    const row = (i) => {
        const splitted = i.split(":");
        return splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1).toLowerCase();
    };
    const text = (values) => {
        return `
\n\n*PRIMI*         
${values.primi.map(i => `_${row(i)}_`).join('\n')}
\n\n*SECONDI*
${values.secondi.map(i => `_${row(i)}_`).join('\n')}
\n\n*DOLCI*
${values.dolci.map(i => `_${row(i)}_`).join('\n')}
`;
    }
    return {
        header: values.header,
        text: text(values),
        dateLong: values.dateLong,
        primi: values.primi,
        secondi: values.secondi,
        dolci: values.dolci,
    }
}

module.exports = RendererSlack;