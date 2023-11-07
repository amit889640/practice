function exponentiation(x, p) {
    if (p == 0) return 1;
    if (p == -1) {
        return (1 / (x * x));
    }
    if (p < 0) {
        return x * exponentiation(x, p + 1);
    } else {
        return x * exponentiation(x, p - 1);
    }

}

console.log(exponentiation(-3, 4));
console.log(exponentiation(2, 3));
