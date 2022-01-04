

function accum(s) {
    let str = s.toLowerCase();
    let newStr = '';
    let rezStr = '';

   for (let i = 0; i < str.length; i++) {
         newStr = '';
    for (let j = 0; j < (i + 1); j++) {
        
        newStr += str[i];
        
    }
    rezStr += newStr[0].toUpperCase() + newStr.slice(1) + '-';
   }
  return rezStr = rezStr.slice(0, -1);
}

 console.log(accum('cwAt') );//"C-Ww-Aaa-Tttt"
