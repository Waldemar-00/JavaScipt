const divisorNumber = (n, a, b) => {

    let sum = 0;
    for(let i = 1; i < n; i++){
        
        if(i%a===0||i%b===0){
            sum = sum + i;
        }
        
        return sum;
    }
}
console.log(divisorNumber(10, 2, 4));