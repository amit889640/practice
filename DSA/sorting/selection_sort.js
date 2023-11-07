function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                // [arr[j], arr[i]] = [arr[i], arr[j]];
                lowest = j;
            }
        }
        [arr[lowest], arr[i]] = [arr[i], arr[lowest]];
    }
    return arr;
}

console.log(selectionSort([8, 5, 9, 7, 4, 2, 1, 3]));