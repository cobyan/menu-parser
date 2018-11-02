const RendererGsheet = (values) => {

    return {
        header: values.header,
        dateLong: values.dateLong,
        primi: values.primi,
        secondi: values.secondi,
        dolci: values.dolci,
    }
}

module.exports = RendererGsheet;