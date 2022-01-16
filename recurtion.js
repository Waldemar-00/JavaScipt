function recurtion(n, i) {
    if(n === 1) return i;
  i *= n;
    return recurtion(n - 1, i);
}

console.log(recurtion(5, 1));