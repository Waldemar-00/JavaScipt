
// Напишите  решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

function squaredNum(arr) {
    
    let rezult = 0;

    for(let i of arr) {

       if(i % 2 === 0) rezult += Math.sqrt(i);
        
    }

    return rezult;
}

console.log(squaredNum([4, 16, 64, 77]));

console.log([4, 16, 64, 77].filter(i => !(i % 2)).reduce((sum, i) => sum + Math.sqrt(i), 0));