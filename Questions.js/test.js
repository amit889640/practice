const obj = {
	name: "amit",
};

const printName = {
	name: "sumit",
	print: function () {
		console.log(this.name);
	},
};

// console.log(printName.bind(obj));
printName.print.bind(obj);

// printName.print();
