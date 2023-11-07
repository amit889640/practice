function spiral(n) {
	c = 0;
	s = 0;
	e = n - 1;
	lp = 1;
	a = [];
	cN = 0;
	for (let i = 0; i < n; i++) {
		if (lp <= 2) {
			for (let j = s; j <= e; j++) {
				if (lp == 1) {
					if (a[c]) {
						a[c][j] = ++cN;
					} else {
						a[c] = [];
						a[c][j] = ++cN;
					}
				} else {
					if (a[j]) {
						a[j][c] = ++cN;
					} else {
						a[j] = [];
						a[j][c] = ++cN;
					}
				}
			}
			[c, s] = [e, s + 1];
		} else {
			for (let j = s; j >= e; j--) {
				if (lp == 3) {
					if (a[c]) {
						a[c][j] = ++cN;
					} else {
						a[c] = [];
						a[c][j] = ++cN;
					}
				} else {
					if (a[j]) {
						a[j][c] = ++cN;
					} else {
						a[j] = [];
						a[j][c] = ++cN;
					}
				}
			}
			[c, e] = [e, e + 1];
		}

		if (lp == 2) {
			s = c - 1;
			e = n - 4;
		}
		if (lp == 4) {
			lp = 1;
			[s, e] = [e, s];
		}
		lp++;
	}

	let print = "";
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (a[i] && a[i][j]) {
				print += "      " + a[i][j];
			} else {
				print += "       ";
			}
		}
		print += "\n";
	}
	console.log(print);
}

spiral(4);
