
function  arrSplice(array) {
        for(let i = 0; i < array.length; i++) {
if(array[i] > 1 &&  array[i] < 7) {
    array.splice(i, 1);
    i--;
}
        }
}
let  array = [0, 1, 2, 3, 4, 5, 6, 7,];
arrSplice(array);
console.log(array);