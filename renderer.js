const rendererMd = require('./renderer-md')
const rendererText = require('./renderer-text')

const Renderer = {
  text: (values) => rendererText(values),
  md: (values) => rendererMd(values),
}

module.exports = Renderer;