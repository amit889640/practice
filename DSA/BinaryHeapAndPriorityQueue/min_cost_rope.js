class priorityQueue {
    constructor() {
        this.values = []
    }

    enqueue(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentElement = this.values[parentIdx];
            if (parentElement <= element) break;
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

            if (leftIdx < length && leftElement < element) {
                swap = leftIdx;
            }

            if (rightIdx < length && ((swap == null && rightElement < element) || (swap != null && rightElement < leftElement))) {
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

let heap = new priorityQueue();

(function minCostRope(arr) {
    if (arr.length == 0) return null;
    for (let i = 0; i < arr.length; i++) {
        heap.enqueue(arr[i]);
    }
    let cost = 0;
    while (heap.getLength() > 1) {
        let itemSum = heap.dequeue() + heap.dequeue();
        cost += itemSum;
        heap.enqueue(itemSum);
    }


    console.log(cost);


})([4, 2, 7, 6, 9]);

// heap.enqueue(7);
// heap.enqueue(8);
// heap.enqueue(9);
// heap.enqueue(4);
// heap.enqueue(6);





// heap.enqueue(39);
// heap.enqueue(33);
// heap.enqueue(18);
// heap.enqueue(27);
// heap.enqueue(12);
// heap.enqueue(55);
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap.dequeue());
// console.log(heap);