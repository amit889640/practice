function maxSumWindow(s) {
  maxCount = 0;
  currentCount = 0;
  let charMap = [];
  for(let i=0; i<s.length; i++) {
    if(charMap.includes(s[i])) {
      charMap=[];
      if(maxCount<currentCount) {
        maxCount=currentCount;
        i=i-2;
      }
      currentCount=0;
    } else {
      charMap.push(s[i]);
      currentCount++;
    }  
  }
  return maxCount>currentCount?maxCount:currentCount;
}
// console.log(maxSumWindow("dvdf"));
// console.log(maxSumWindow("abcabcbb"));
// console.log(maxSumWindow("bbbbb"));
// console.log(maxSumWindow("pwwkew"));
// console.log(maxSumWindow(" "));
// console.log(maxSumWindow("B"));
// console.log(maxSumWindow(""));
console.log(maxSumWindow("aab"));
