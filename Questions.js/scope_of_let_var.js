// Scope of let and var

function call(params) {
	let a = 5;
	var b = 6;
	{
		a = 7;
		var b = 8;
		console.log(a);
	}

	console.log(a);
	console.log(b);
}

call();
