function findIntersection(arr1, arr2) {
	let intersect = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i])) {
			intersect.push(arr1[i]);
			arr2[arr2.indexOf(arr1[i])] = null;
			arr1[i] = null;
		}
	}
	return intersect;
}

console.log(findIntersection([1, 1, 2, 2, 3], [2, 2, 3, 3, 4]));
