'use strict'
newFunction(); //Type error: cannot convert a Symbol to a string;

function newFunction() {
    let id = Symbol(500);
    console.log(id.description);

    // alert(id.toString());
    // alert(id);
}
