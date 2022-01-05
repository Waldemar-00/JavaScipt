
function findUniqueNumber(arr) {
    next:
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 2) {
            if (arr[i] !== arr[i + 1]) return console.log(arr[i + 1]);
        }
        if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) return console.log(arr[i]);
        else continue next;
}
}
 findUniqueNumber([ 0, 1, 0 ]);//требуется поправка на этот случай, когда уникальный элемент находится по центру в массиве из 3х элементов