'use strict'
function consoleArr(name, sourname, secondname, fun) {

    let obj = {
        // name: name,
        // sourname: sourname,
        // secondname: secondname,
        name,
        sourname,
        secondname,
    };
    
    fun(obj);
     return `${obj.name} ${obj.sourname} ${obj.secondname}`;
}
let question = prompt('what do you want to seach?', 'name or sourname or secondname');
console.log(consoleArr('jon', 'Malcovich', 'Kuziakin', function foo(obj) { 
    console.log( question in obj);
} ) );
