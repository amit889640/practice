function merge(arr1, arr2) {
    let i = 0, j = 0;
    let tempArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            tempArr.push(arr2[j]);
            j++;
        } else {
            tempArr.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        tempArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        tempArr.push(arr2[j]);
        j++;
    }
    return tempArr;
}

console.log(mergeSort([5, 1, 4, 2]));


function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}