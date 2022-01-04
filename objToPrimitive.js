'use strict'
let obj = {
    str: 'Hello',
    number: 500,
    [Symbol.toPrimitive](hint) {
        return hint === 'string' ? this.str : this.number;
    }
   
  };
 
  console.log( String(obj) );
  console.log(obj + 700);//JS не знает, к чему привести и приводит к значению default -> true -> number
  console.log(+obj);
