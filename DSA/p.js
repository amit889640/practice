function outer() {
  var counter = 0;
  return function inner() {
    return counter++;
  };
}

let t = outer();
console.log(t());
console.log(t());
console.log(t());
