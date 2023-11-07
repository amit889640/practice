var longestCommonPrefix = function (strs) {
    if (!validateStrings(strs)) return "";
    if (strs.length == 1) return strs[0];
    strOne = strs[0];
    commonString = "";
    for (let i = 0; i < strOne.length; i++) {
        if (checkCommonInAll(strOne[i], i, strs)) {
            commonString += strOne[i];
        } else {
            return commonString;
        }
    }
    return commonString;
};

function validateStrings(strs) {
    if (strs.length == 0 && strs.length > 200) return false;
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length == 0 || strs[i].length > 200) return false;
        strs[i] = strs[i].toLowerCase();
    }
    return strs;
}

function checkCommonInAll(chr, pos, strs) {
    flag = null;
    for (str of strs) {
        if (chr == str[pos]) {
            flag = true;
        } else {
            return false;
        }
    }
    return flag;
}

console.log(longestCommonPrefix(
    ["a", "b", "c"]));
// console.log(checkCommonInAll("m", 1, ["amit", "aian"]));