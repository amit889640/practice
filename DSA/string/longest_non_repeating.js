// longest non repeating substr
const str = 'ABCDDEFGHIJD'
// op :-DEFGHIJ
function maxSubStr(str) {
    let lastStr = '';
    largestStr = '';
    for (let i = 0; i < str.length; i++) {
        if (lastStr.includes(str[i]) || i == str.length - 1) {
            if (largestStr.length < lastStr.length) {
                largestStr = lastStr;
            }
            lastStr = str[i];
        } else {
            lastStr += str[i];
        }
    }
    return largestStr;
}

console.log(maxSubStr(str))