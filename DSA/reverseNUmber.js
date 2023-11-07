function reverseNumber(number) {
	let n = 0;
	while (number > 0) {
		n = n * 10 + parseInt(number % 10);
		number = parseInt(number / 10);
	}
	return n;
}

function isPalindrome(number) {
	let n = 0;
	let num = number;
	while (num > 0) {
		n = n * 10 + parseInt(num % 10);
		num = parseInt(num / 10);
	}

	return n == number ? "Yes" : "No";
}
console.log(reverseNumber(1221));
console.log(isPalindrome(12345));
