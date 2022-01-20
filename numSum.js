
function numSum(a, b, step) {
    let arr = [];
    let sum = 0;
    let start;
    let end;

    if (step > 0) {
    if (a >= b) {

        start = b;
        end = a;

    } else {

        start = a;
        end = b;

    }

    for (let i = start; i <= end; i = i + step) {

        arr.push(i);
        sum += i;

    }

} else if(step < 0) {

    if (a >= b) {

        start = a;
        end = b;

    } else {

        start = b;
        end = a;

    }

    for (let i = start; i >= end; i = i + step) {

        arr.push(i);
        sum += i;

    }

}
    
    return console.log(arr, ` ---- ${sum}`);
}

numSum(0, 10, -1);

