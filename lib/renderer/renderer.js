const rendererMd = require('./renderer-md')
    , rendererText = require('./renderer-text')
    , rendererGsheet = require('./renderer-gsheet')
    , rendererSlack = require('./renderer-slack');

const Renderer = {
  text: (values) => rendererText(values),
  md: (values) => rendererMd(values),
  gsheet: (values) => rendererGsheet(values),
  slack: (values) => rendererSlack(values)
}

module.exports = Renderer;