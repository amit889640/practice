// First-Class Function: A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function.
// JavaScript treat function as a first-class-citizens. This means that functions are simply a value and are just another type of object.

// Higher-Order Function: A function that receives another function as an argument or that returns a new function or both is called Higher-order function. Higher-order functions are only possible because of the First-class function.

function add(a, b) {
	return a + b;
}
function mul(a, b) {
	return a * b;
}
function divide(a, b) {
	return a / b;
}

function calculate(operation, a, b) {
	console.log(operation(a, b));
}

console.log(calculate(divide, 4, 2));
