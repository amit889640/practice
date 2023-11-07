str = "amit kumar sharma";
obj = {
	name: "amit",
	age: 27,
};
freq = {};
for (const key of str) {
	// freq[key]=freq[key]&&freq[key]+1||1
	freq[key] = (freq[key] || 0) + 1;
}

console.log(freq);
