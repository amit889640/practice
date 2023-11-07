function transposeMatrix(matrix) {
	let transpose = [];
	for (let i = 0; i < matrix.length; i++) {
		let r = [];
		for (let j = 0; j < matrix[0].length; j++) {
			r.push(matrix[j][i]);
		}
		transpose.push(r);
	}
	return transpose;
}

console.log(
	transposeMatrix([
		[1, 2],
		[4, 5],
	])
);
