function findSumOfMaxAndMin(arr) {
	let max = -Infinity;
	let min = Infinity;
	for (let i = 0; i < arr.length; i++) {
		max = max < arr[i] ? arr[i] : max;
		min = min > arr[i] ? arr[i] : min;
	}
	return max + min;
}

console.log(findSumOfMaxAndMin([5, 2, 3, 4, 8]));
