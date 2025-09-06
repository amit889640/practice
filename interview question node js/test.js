function lengthOfLongestSubstring(str) {
  let tempStrArr = [str[0]];
  let largestStr = str[0];
  let startPos = 0;
  ``;
  for (let i = 1; i < str.length; i) {
    if (tempStrArr.includes(str[i])) {
      if (largestStr.length < i - 1 - startPos) {
        largestStr = str.substring(startPos, i);
      }
      startPos = i;
      i = startPos + 1;
      tempStrArr = [];
    } else {
      tempStrArr.push(str[i]);
      i = i + 1;
    }
  }
  return largestStr;
}

console.log(lengthOfLongestSubstring("pwwkew"));
