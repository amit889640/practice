function sumOfTarget(arr, target, i, sum) {
    if (i == arr.length) {
        return sum == target;
    }
    return sumOfTarget(arr, target, i + 1, sum + arr[i]) || sumOfTarget(arr, target, i + 1, sum);
}

console.log(sumOfTarget([1, 4, 6, 8], 10, 0, 0));