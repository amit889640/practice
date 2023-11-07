function isLeapYear(year) {
	return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ? "Yes" : "No";
}

console.log(isLeapYear(2021));
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2100));
