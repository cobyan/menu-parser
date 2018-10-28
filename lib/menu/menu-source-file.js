const fs = require('fs');

const menuSource = (menuFilePathRel = null) => {
    let menuRaw;
    

    try {
        menuRaw = fs.readFileSync(__dirname + '/../../' + menuFilePathRel, {encoding: 'utf8'});
    } catch(e) {
        throw new Error(e);
    }

    return menuRaw;
}

module.exports = menuSource;