function isMinHeap(arr) {
    let idx = 0;
    while (idx < arr.length) {
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;
        if (arr[leftIdx] <= arr[idx] || arr[rightIdx] <= arr[idx]) return false;
        idx++;
    }
    return true;
}

console.log(isMinHeap([5, 2, 3, 4]));