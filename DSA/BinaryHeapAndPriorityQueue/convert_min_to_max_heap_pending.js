function solution(arr) {
    let n = arr.length;
    for (let i = (n - 1) / 2; i > 0; i--) {
        maxHeapify(arr, i, n);

    }
    console.log(maxHeapify(arr));
}


maxHeapify(arr, i, n){

    let leftIdx = i * 2 + 1;
    let rightIdx = i * 2 + 2;
    let leftChild = arr[leftIdx];
    let rightChild = arr[leftIdx];

}