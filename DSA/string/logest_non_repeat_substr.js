// longest non repeating substr
const str = 'ABCDDDEFGHIJ'
// op :-DEFGHIJ
function maxSubStr(str) {
    let lastStr = '';
    largestStr = '';
    for (let i = 0; i < str.length; i++) {
        if (lastStr.includes(str[i]) || i == str.length - 1) {
            if (largestStr.length < lastStr.length) {
                largestStr = lastStr;
            }
            lastStr = '';
        } else {
            lastStr += str[i];
        }
    }
    return largestStr;
}

console.log(maxSubStr(str))