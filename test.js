function outer(m) {
  return function (n) {
    if (n) {
      return outer(m * n);
    } else {
      return m;
    }
  };
}

console.log(outer(4)(2)(5)());
