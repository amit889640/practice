// function nonDuplicate(arr) {
// 	let freq = {};
// 	let nonDupArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		freq[arr[i]] = ((freq[arr[i]] && freq[arr[i]]) || 0) + 1;
// 	}

// 	for (key in freq) {
// 		if (freq[key] == 1) {
// 			return key;
// 		}
// 	}
// }

function nonDuplicate(arr) {
	let dupArr = [];
	let nonDupArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr.lastIndexOf(arr[i]) == i && !dupArr.includes(arr[i])) {
			nonDupArr.push(arr[i]);
			// console.log(arr[i]);
		} else {
			dupArr.push(arr[i]);
		}
	}
	return nonDupArr[0];
}

console.log(nonDuplicate([5, 2, 3, 1, 2, 5, 9]));

// console.log([1, 2, 3, 4, 3, 2].lastIndexOf(1));
