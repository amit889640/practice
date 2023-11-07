// Bubble sort
// If the array is already sorted then we can make the use of isNoSwap variable to check 
// whether swapping has been done or not, if no then we can break the loop , to make this more optimize
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let isNoSwap = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                isNoSwap = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (isNoSwap) break;
    }
    return arr;
}


console.log(bubbleSort([8, 5, 9, 7, 4, 2, 1, 3]));