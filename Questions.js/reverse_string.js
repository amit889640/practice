let s = "amit kumar";
// console.log(s.split("").reverse().join(""));

let st = "";
for (let i = s.length - 1; i >= 0; i--) {
	st += s[i];
}

console.log(st);
