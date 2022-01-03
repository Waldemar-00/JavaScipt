
function maskify(cc) {
    cc = cc.toString();
    let str = '';
    let pieceOfStr = cc.slice(-4);
    for(let i = 0; i < cc.length - 4; i++) {
        str += '#';
    }
    str += pieceOfStr;
    return str;
}
console.log(maskify());