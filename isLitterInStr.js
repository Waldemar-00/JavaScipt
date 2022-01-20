
function isLitterInStr(str, litt) {
    let regExp = new RegExp(litt, 'gmi');
    let arrLitt = str.match(regExp);
    return console.log(arrLitt.length);
}

isLitterInStr('BbBhghkgb', 'B');