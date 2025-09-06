const { max } = require("moment");

function maxSumSumArray(array) {
	maxSum = 0;
	maxSumArr = [];
	for (let i = 0; i < array.length; i++) {
		sum = 0;
		for (var j = i; j < array.length; j++) {
			sum += array[j];
		}
		if (maxSum < sum) {
			maxSumArr = array.slice(i, j);
			maxSum = sum;
		}
	}
	return { maxSum, maxSumArr };
}
// O(n^2)

// array = [2, 3, -5, 5, 7];
// array = [2, 3, -5, 6];
// console.log(maxSumSumArray(array));

function kadanesAlgo(array) {
	maxSum = 0;
	sum = 0;
	maxSumArr = [];
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
		maxSumArr.push(array[i]);
		if (maxSum < sum) {
			maxSum = sum;
		} else if (sum < 0) {
			sum = 0;
			maxSumArr = [];
		}
	}
	return { maxSum, maxSumArr };
}

// array = [2, 3, -6, 6, 8];
array = [1, 1, -3, 2, -2, -2];
// console.log(maxSumSumArray(array));
console.log(kadanesAlgo(array));
//
