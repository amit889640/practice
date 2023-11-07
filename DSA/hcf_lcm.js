function calculateHCF(a, b) {
	let smallN = Math.min(a, b);
	let hcf = 1;
	for (let i = 1; i <= smallN; i++) {
		if (a % i == 0 && b % i == 0) {
			hcf = i;
		}
	}
	return hcf;
}

function calculateHCFRecursion(a, b) {
	if (b == 0) {
		return a;
	}
	return hcfRecursion(b, b % a);
}

function hcfRecursion(a, b) {
	let hcf = calculateHCF(a, b);
	return (a * b) / hcf;
}

// console.log(hcf(4, 6));
console.log(hcfRecursion(4, 6));
