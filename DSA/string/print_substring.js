// not working failing with some cases
function lss(s) {
    let strArr = [];
    let temp = ''
    for (let i = 0; i < s.length; i++) {
        if (!temp.includes(s[i])) {
            temp = temp + s[i];
        } else {
            strArr.push(temp);
            temp = '';
            i = i - 1;
        }
    }
    strArr.push(temp);
    strArr = strArr.sort((a, b) => b.length - a.length);
    console.log(strArr);
    return strArr[0].length;
}


console.log(lss("dvdf"));
// "bbbbb" /1

// dvdf/3
// pwwkew/3