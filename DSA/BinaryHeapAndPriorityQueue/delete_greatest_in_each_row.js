const { log } = require("console");

class MaxPriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let ele = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEle = this.values[parentIdx];
            if (ele <= parentEle) break;
            this.values[parentIdx] = ele;
            this.values[idx] = parentEle;
            idx = parentIdx;
        }
    }

    dequeue() {
        let min = this.values[0];
        let ele = this.values.pop();
        this.values[0] = ele;
        this.sinkDown();
        return min;
    }

    sinkDown() {
        let idx = 0;
        let ele = this.values[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftChild = this.values[leftIdx];
            let rightChild = this.values[rightIdx];
            let swap = null;
            if (this.values.length > leftIdx) {
                if (leftChild > ele) {
                    swap = leftIdx;
                }
            }
            if (this.values.length > rightIdx) {
                if (swap == null && rightChild > ele || swap != null && rightChild > leftChild) {
                    swap = rightIdx;
                }
            }
            if (swap == null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = ele;
            idx = swap;
        }
    }

    size() {
        return this.values.length;
    }
    front() {
        return this.values[0];
    }
}

function deleteGreatestValue(arr) {
    let r = arr.length;
    let c = arr[0].length;

    let heap = new MaxPriorityQueue();
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            heap.enqueue(arr[i][j])
        }
    }

    let count = r - 1;
    let sum = 0;
    for (let i = 0; i < r * c; i++) {
        count++;
        if (count == r) {
            sum += heap.dequeue();
            count = 0;
        } else {
            heap.dequeue();
        }
    }
    return sum;
}

console.log(deleteGreatestValue([[1, 2, 4], [3, 3, 1]]));