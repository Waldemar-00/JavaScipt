function arrSort(arr) {
    if(arr.length === 0) return [];
    
    let x = [];
    let y = [];
    
    for(let i = 1; i < arr.length; i++) {
    if(arr[0] > arr[i])x[x.length] = arr[i];
    else y[y.length] = arr[i];
    }
    return arrSort(x).concat(arr[0], arrSort(y));
} 

let arr = [4, 2, 3, 0, 1, 5, 19, 10, 11, 28, 24, 100, -1, -8, 23, 48, 12, 33, 78, 56, 99, 30, 74];
console.log(arrSort(arr));