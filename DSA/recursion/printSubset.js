

function subSet(arr, i = 0, temp = []) {
    if (i == arr.length) {
        return temp;
    }
    temp.push(arr.slice(i, arr.length));
    return subSet(arr, i + 1, temp)
}

console.log(subSet([1, 2, 3])); 