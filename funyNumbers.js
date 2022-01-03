
function isFunyNum(n, p) {
    n = n.toString();
    let arr = n.split('');
    let sum = 0;

    for (let i of arr) {
        sum += i ** p;
        p ++;
    }
    let k = 0;
     if (sum % n === 0) return k = sum/n;
     else return -1;
}

console.log(isFunyNum(695, 2));