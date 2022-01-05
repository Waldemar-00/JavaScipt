
// Напишите функцию, которая пишет в консоль число в заданном диапазоне,
//  в случае, если оно успешно делится или не делится с остатком или без остатка
//  в зависимости от параметров.

function outputtingNumEven(a, b) {

    if(a % 2) for(let i = a + 1; i <= b; i += 2) console.log(i);
    else for(let i = a; i <= b; i += 2) console.log(i);
   
}


function outputtingNumNotEven(a, b) {

    if(a % 2 === 0) for(let i = a + 1; i <= b; i += 2) console.log(i);
     else for(let i = a; i <= b; i += 2) console.log(i);
   
}


function isEven(a, b) {
    let flag = confirm('Output Even Number - Push "Ok" else Push "Cancel".');

    if(flag) outputtingNumEven(a, b);
    else outputtingNumNotEven(a, b);

}

isEven(10, 21);