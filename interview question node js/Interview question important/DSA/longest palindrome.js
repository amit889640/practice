function palindrome(str) {
  let maxstr = "";
  for (let i = 0; i < str.length; i++) {
    let osubstr = expand(str, i, i + 1);
    let esubstr = expand(str, i, i);
    substr = osubstr.length > esubstr.length ? osubstr : esubstr;
    maxstr = substr.length > maxstr.length ? substr : maxstr;
  }

  return maxstr;
}

function expand(str, i, j) {
  let substr = "";
  while (str[i] == str[j] && i >= 0 && j < str.length) {
    substr = str.substring(i, j + 1);
    i = i - 1;
    j = j + 1;
  }

  return substr;
}

console.log(palindrome("babad"));
//  palindrome("abaaabbbaa");
