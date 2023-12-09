function stringReverse(str) {
    if (str.length == 0) return "";
    return str[str.length - 1] + stringReverse(str.substr(0, str.length - 1));
}


console.log(stringReverse("hello"));