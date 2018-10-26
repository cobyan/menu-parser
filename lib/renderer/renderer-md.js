const marked = require('marked');
const TerminalRenderer = require('marked-terminal');

const RendererMd = (values) => {
            
        marked.setOptions({
        // Define custom renderer
        renderer: new TerminalRenderer()
        });

        let out = `# BAR MILANO #
#### ${values.header} ####

---
### *PRIMI*
${values.primi.map(i => {
    const d = i.replace('- ','');
    return `- ${d}\n`;
}).join('\n')}

---
### *SECONDI*
${values.secondi.map(i => {
    i.replace('-','');
    return `- ${i}\n`;
}).join('\n')}
    
---
### *DOLCI*
${values.dolci.map(i => {
    i.replace('-','');
    return `- ${i}\n`;
}).join('\n')}`;

        out = marked(out);
    return out;
};

module.exports = RendererMd;