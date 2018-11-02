const rendererMd = require('./renderer-md')
    , rendererText = require('./renderer-text')
    , rendererGsheet = require('./renderer-gsheet');

const Renderer = {
  text: (values) => rendererText(values),
  md: (values) => rendererMd(values),
  gsheet: (values) => rendererGsheet(values),
}

module.exports = Renderer;