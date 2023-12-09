function checkPalindrome(str) {
    if (str[0] != str[str.length - 1]) {
        return false;
    }
    if (str.length == 0) {
        return true;
    }
    return checkPalindrome(str.slice(1, str.length - 1));
}

console.log(checkPalindrome("aababaa"));