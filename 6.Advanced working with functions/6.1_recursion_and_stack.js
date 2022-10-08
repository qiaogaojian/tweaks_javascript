function sumTo(n) {
    if (n - 1 === 0) {
        return n;
    }
    return n + sumTo(n - 1);
}

console.log(sumTo(100));