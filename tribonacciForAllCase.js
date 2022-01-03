



function tribonacci(signature, n){
    if (n < 3) {
        signature.length = n;
        return signature;
    }
    for(let i = 0; i < n - 3; i++) {
       signature.push(signature[signature.length - 3] + signature[signature.length - 2] + signature[signature.length - 1]);
   }
   return signature; //your code here
   }

   console.log(tribonacci([1, 1, 1], 0));