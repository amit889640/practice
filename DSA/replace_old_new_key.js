function replaceKey(arr, oldKey, newKey) {
	arr.map((e, i) => e == oldKey && (arr[i] = newKey));
	return arr;
}

console.log(replaceKey([1, 2, 3, 2, 4, 2, 5], 2, 6));
