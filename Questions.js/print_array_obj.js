objArr = [
	{
		Name: "Amit kumar",
		Age: 27,
	},
	{
		Name: "Sumit kumar",
		Age: 26,
	},
	{
		Name: "Arun kumar",
		Age: 29,
	},
];

objArr.forEach((obj) => {
	for (e in obj) {
		console.log(`${e} ${obj[e]}`);
	}
});
