function queue(customers, n) {
let timeSum = 0;
let arr = [];
let i = 0
    while (i < n) {

        arr.push(customers[i]);
        console.log(arr);

        i++;
    }
    return arr;
}
console.log([44,38,43,42,18,11,26,19,19,32,6,3,35,41,47,31,34,49,38,15,25,39 ], 5);
