function checkPalindrom(str, l = 0) {
    console.log(l);
    if (str[l] != str[str.length - 1 - l]) {
        return false;
    }
    // remember to parse in int

    if (l == parseInt(str.length / 2)) {
        return true;
    }
    return checkPalindrom(str, l + 1);
}

console.log(checkPalindrom("aabaqabaa"));