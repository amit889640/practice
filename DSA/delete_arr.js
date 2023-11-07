function deleteDivisibleElements(arr) {
	const arr1 = arr.filter((e) => !(e % 2 == 0 && e % 3 == 0));
	return arr1;
}

console.log(deleteDivisibleElements([1, 2, 3, 4, 5, 6, 7, 8, 9]));
