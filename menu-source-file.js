const fs = require('fs');
const menuSource = (datecode = null) => {
    let menuRaw;
    const menuFilePathRel = './sampleMenu/menu-' + datecode + '.txt';
    
    try {
        menuRaw = fs.readFileSync(menuFilePathRel, {encoding: 'utf8'});
    } catch(e) {
        console.log('Menu not found');
        return;
    }

    return menuRaw;
}

module.exports = menuSource;