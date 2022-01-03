function fibonacci(n) {
    
    let arr = [0, 1];

    for(let i = 0; i < n - 2; i++) {
            arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        }

        return arr[n - 1];
}
 console.log(fibonacci(10));
