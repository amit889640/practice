function fibbo(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return fibbo(n - 1) + fibbo(n - 2);
}

console.log(fibbo(5));