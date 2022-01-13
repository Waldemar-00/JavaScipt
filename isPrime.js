

function IsPrime(n) {
  isPrime :
  for(let i = 2; i <= n; i++) {
let j = 2;
        while(j < i) {
        if(i % j === 0)continue isPrime;
        j ++;
        } 
        console.log (i);
    }
    
}
IsPrime(20);