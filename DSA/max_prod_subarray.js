function max_prod_subarray(arr) {
	// let arr = str.split("");
	let prod = arr[0];
	let maxProd = arr[0];
	for (let i = 1; i < arr.length; i++) {
		prod *= arr[i];
		if (maxProd < prod) {
			maxProd = prod;
		} else if (prod < 0) {
			prod = 1;
		}
	}
	return maxProd;
}

console.log(max_prod_subarray([2, -3, 2, 4, -5]));
