function bs(arr, n, mid, l, r) {
    if (arr[mid] == n) {
        return true;
    }
    if (l > r) {
        return false;
    }
    if (n < arr[mid]) {
        r = mid - 1;
        return bs(arr, n, parseInt((l + r) / 2), l, r)
    }
    if (n > arr[mid]) {
        l = mid + 1;
        return bs(arr, n, parseInt((l + r) / 2), l, r)
    }

}
let arr = [1, 2, 3, 4, 5, 6];
let length = arr.length - 1
console.log(bs(arr, 8, parseInt((arr.length - 1) / 2), 0, length));
