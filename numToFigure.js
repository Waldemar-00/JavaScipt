let j = 0;
function figure(num) {
    num = num.toString();
    if (num.length === 1) return j;
    let sum = 1;

for (let i = 0; i < num.length; i++) {
     sum *= num[i];
}


return figure(sum, ++j);
}
console.log(figure(999));