memo = {};
function fibo(n) {
	if (n == 0 || n == 1) {
		return 1;
	} else {
		let n1, n2;

		if (memo[n - 1]) {
			n1 = memo[n - 1];
		} else {
			n1 = memo[n - 1] = fibo(n - 1);
		}

		if (memo[n - 2]) {
			n2 = memo[n - 2];
		} else {
			n2 = memo[n - 2] = fibo(n - 2);
		}
		return n1 + n2;
	}
}

console.log(fibo(4));

// 0 1 1 2 3 5
