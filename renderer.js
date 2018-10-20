const marked = require('marked');
const TerminalRenderer = require('marked-terminal');
const rendererMd = require('./renderer-md')
const rendererText = require('./renderer-text')

const Renderer = {
  text: (values) => { console.log('rendering text'); return rendererText(values); },
  md: (values) => {console.log('rendering md'); return rendererMd(values); }
}

module.exports = Renderer;