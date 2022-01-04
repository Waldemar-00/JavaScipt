
let id = Symbol('number');

let obj = {
    [id]: 67,
    id: 100,
    [id]: 150,// при внесении в объект сразу так же используем [], так как это переменная!!! А не строка, как остальные свойства объекта.
   fu:  () => console.log(this.id),
}

//obj[id] = 200;//задаем значение только через [] скобки, присваивая символ объекту
console.log(obj.id);
console.log(`${id.description} - ${obj[id]}`);// получаем значение символа только через квадратные скобки

let sG = Symbol.for(700);
let sGl = Symbol.for('string');

console.log( obj.fu() );
console.log(Symbol.keyFor(sG));
console.log(Symbol.keyFor(sGl));
console.log(sG.description);
console.log(sGl.description);
console.log(Symbol.keyFor(id));


