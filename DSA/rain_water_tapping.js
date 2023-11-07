// Brut force
function trapRainWater(heights) {
	let total = 0;
	for (let i = 0; i < heights.length; i++) {
		lMax = 0;
		rMax = 0;
		for (let j = 0; j < heights.length; j++) {
			if (i > j) {
				lMax = Math.max(lMax, heights[j]);
			}
			if (i < j) {
				rMax = Math.max(rMax, heights[j]);
			}
		}
		if (Math.min(lMax, rMax) - heights[i] > 0) {
			total += Math.min(lMax, rMax) - heights[i];
		}
	}
	return total;
}

// Pre-processed array
function trapRainWaterOptimise(heights, n) {
	let total = 0;
	let lMax = new Array(heights.length).fill(0);
	let rMax = new Array(heights.length).fill(0);
	lMax[0] = heights[0];
	for (let i = 1; i < heights.length; i++) {
		lMax[i] = Math.max(heights[i], lMax[i - 1]);
	}

	rMax[heights.length - 1] = heights[heights.length - 1];
	for (let i = heights.length - 2; i >= 0; i--) {
		rMax[i] = Math.max(heights[i], rMax[i + 1]);
	}

	for (let i = 1; i < heights.length - 1; i++) {
		let evaluate = Math.min(lMax[i - 1], rMax[i + 1]) - heights[i];
		total = evaluate > 0 ? evaluate + total : total;
	}
	return total;
}

console.log(trapRainWater([0, 1, 0, 3, 0, 2, 0]));
console.log(trapRainWaterOptimise([0, 1, 0, 3, 0, 2, 0]));
