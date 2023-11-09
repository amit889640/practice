class priorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(obj) {
        this.values.push(obj);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentElement = this.values[parentIdx];
            if (parentElement.val <= element.val) break;
            this.values[parentIdx] = element;
            this.values[idx] = parentElement;
            idx = parentIdx;
        }
    }

    dequeue() {
        let min = this.values[0];
        let extractElement = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = extractElement;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[idx];
        while (idx <= length - 1) {
            let leftIdx = idx * 2 + 1;
            let rightIdx = idx * 2 + 2;
            let leftElement = this.values[leftIdx];
            let rightElement = this.values[rightIdx];
            let swap = null;

            if (leftIdx < length && leftElement.val < element.val) {
                swap = leftIdx;
            }

            if (rightIdx < length && ((swap == null && rightElement.val < element.val) || (swap != null && rightElement.val < leftElement.val))) {
                swap = rightIdx;
            }
            if (swap == null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    getLength() {
        return this.values.length;
    }

}

function pushInHeap(arr) {
    let heap = new priorityQueue();
    for (let i = 0; i < arr.length; i++) {
        heap.enqueue({ val: arr[i][0], index: [i, 0] });
    }
    return heap;
}


(function merge() {
    let testArr = [[1, 4, 8], [2, 5, 9], [3, 4, 6]];
    let heap = pushInHeap(testArr);
    let newSortedArr = [];
    while (heap.getLength() > 0) {
        let extractElement = heap.dequeue();
        let newValue = testArr[extractElement.index[0]][extractElement.index[1] + 1];
        if (newValue) {
            heap.enqueue({ val: newValue, index: [extractElement.index[0], extractElement.index[1] + 1] });
        }
        newSortedArr.push(extractElement.val);
    }
    console.log(newSortedArr);
})()

