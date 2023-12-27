const { log } = require("console");

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.value = [];
    }

    enqueue(val, priority) {
        let n = new Node(val, priority);
        this.value.push(n);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.value.length - 1;
        let element = this.value[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((2 * idx - 1) / 2);
            let parentElement = this.value[parentIdx];
            if (parentElement.priority > element.priority) break;
            this.value[idx] = this.value[parentIdx];
            this.value[parentIdx] = element;
            idx = parentIdx;
        }
    }

    dequeue() {
        let max = this.value[0];
        let lastEl = this.value.pop();
        this.value[0] = lastEl;
        this.sinkDown();
        return max;
    }

    sinkDown() {
        let idx = 0;
        let length = this.value.length;
        let ele = this.value[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let leftParent = this.value[leftIdx];
            let rightParent = this.value[rightIdx];
            let swap = null;
            if (leftIdx < length && leftParent.priority > ele.priority) {
                swap = leftIdx;
            }
            if (rightIdx < length) {
                if (swap == null && rightParent.priority > ele.priority || swap != null && rightParent.priority > leftParent.priority) {
                    swap = rightIdx;
                }
            }
            if (swap == null) break;
            this.value[idx] = this.value[swap];
            this.value[swap] = ele;
            idx = swap;
        }
    }
}


let pq = new PriorityQueue();
// pq.enqueue("eating", 2);
// pq.enqueue("playing", 3);
// pq.enqueue("dancing", 4);
// pq.enqueue("visit", 5);
// pq.enqueue("reading", 1);

// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());
// console.log(pq.dequeue());



function freq(arr) {
    let freq = {};
    for (e of arr) {
        freq[e] = (freq[e] || 0) + 1;
    }
    return freq;
}

function insertInPriorityQ(freq) {
    for (const key in freq) {
        pq.enqueue(key, freq[key]);
    }
}

function solution(arr, k) {
    let frequencies = freq(arr);
    insertInPriorityQ(frequencies);

    for (let i = 1; i <= k; i++) {
        console.log(pq.dequeue());
    }
}

console.log(solution([2, 2, 1, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7], 2));
