let str2 = '';
function checkPalin(str, mid, i) {
    if (i > mid) {
        return true;
    }
    l = str.length % 2 == 0 ? mid - i - 1 : mid - i;
    r = mid + i;
    if (str[l] == str[r]) {
        if (str.length % 2 != 0 && i == 0) {
            str2 = str[mid]
        } else {
            str2 = str[l] + str2 + str[r];
        }
        return checkPalin(str, mid, ++i);
    } else {
        console.log(str2)
        return false;
    }
}
let str = 'baaab';
console.log(checkPalin(str, parseInt(str.length / 2), 0));