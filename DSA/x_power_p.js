function power(x, p) {
    if (p == 1 && p > 0) return x;
    if (p == 1 && p < 0) return 1 / x;
    if (p == 0) return 1;
    if (p > 0) {
        return x * power(x, p - 1);
    }
    if (p < 0) {
        return (1 / x) * power(x, p + 1);
    }
}

console.log(power(-3, 4))