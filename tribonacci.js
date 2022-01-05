
function fibonacci(signature, n) {
    let arr = [];

    if (signature === 0) {
     arr = [0, 0, 1];

    for(let i = 0; i < n - 3; i++) {
            arr.push(arr[arr.length - 3] + arr[arr.length - 2] + arr[arr.length - 1]);
        }
    }
    else if (signature === 1) {
         arr = [1, 1, 1];

    for(let i = 0; i < n - 3; i++) {
            arr.push(arr[arr.length - 3] + arr[arr.length - 2] + arr[arr.length - 1]);
        }
    }
        return arr;
}
 console.log(fibonacci(1, 10));