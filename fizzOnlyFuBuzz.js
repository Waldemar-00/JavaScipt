

function consoleFizz(a) {

        console.log(w += a);
}


function consoleBuzz(b) {
    
        console.log(y += b);

}

function consoleFizzBuzz(nextNum, fb) {

        console.log(nextNum + `\n-----------`);
        nextNum += fb;
       
}


function call(n, a, b) {

    let fb = a * b;
    nextNum = fb;

    for (let i = 0; i < n; i ++) {
    consoleFizz(a);
    consoleBuzz(b);
    consoleFizzBuzz(nextNum, fb);
    }
}

let w = 0;
let y = 0;
let nextNum = 0;

call(10, 3, 5);