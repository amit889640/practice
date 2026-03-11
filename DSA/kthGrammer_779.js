// 0
// 01
// 0110
// 01101001

var kthGrammar = function (n, k) {
  if (n == 0) {
    return 0;
  }
  if (n == 1 && k == 1) {
    return 0;
  } else if (k <= Math.pow(2, n - 1) / 2) {
    return kthGrammar(n - 1, k);
  } else {
    return 1 - kthGrammar(n - 1, k - Math.pow(2, n - 1) / 2);
  }
};

console.log(kthGrammar(1, 1));
