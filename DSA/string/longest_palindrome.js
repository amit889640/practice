let str2 = '';
function checkPalin(str, mid, i) {
    if (i > mid) {
        return str2;
        // return true;
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
        return str2
        return false;
    }
}
let str = 'qbabeaaab';
let max = -Infinity;
for (let i = 0; i < str.length; i++) {
    let p = checkPalin(str, i, 0)
    if (p.length > max) {
        max = p.length;
    }
}
console.log(max);


// console.log(checkPalin(str, parseInt(str.length / 2), 0));