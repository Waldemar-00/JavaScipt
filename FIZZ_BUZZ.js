
function consoleFizzBuzz(n, x, y) {
    let z = x * y;
    let rezult = z;
    
    for (let i = 1; i <= n; i++) {

     console.log(rezult); 

     rezult += z;
     
    }
}

consoleFizzBuzz(10, 3, 5);