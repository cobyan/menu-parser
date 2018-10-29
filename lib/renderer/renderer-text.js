const RendererText = (values) => {
    let out = `${values.header}\n\n`; //`${orderDate[0].trim()}\n\n`;
        out += " *** PRIMI ***\n\n";
        out += values.primi.join("\n");
        out += "\n\n *** SECONDI ***\n\n";
        out += values.secondi.join("\n");
        out += "\n\n *** DOLCI ***\n\n";
        out += values.dolci.join("\n");
  return out;
}

module.exports = RendererText;