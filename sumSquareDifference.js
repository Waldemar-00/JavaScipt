const sumSquareDifference = (n) => {
    let squareSum = 0;
    for (i = 1; i <= n; i++) {
        squareSum += i ** 2;
    }
    let sumSquare = 0;
    for (i = 1; i <= n; i++) {
        sumSquare += i;
    }

    return sumSquare ** 2 - squareSum;
}
console.log(sumSquareDifference(10));

