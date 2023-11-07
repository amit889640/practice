class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (parent.priority <= element.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    dequeue() {
        let min = this.values[0];
        let element = this.values.pop();
        this.values[0] = element;
        this.sinkDown();
        return min;
    }

    sinkDown() {
        let element = this.values[0];
        let idx = 0;

        while (true) {
            let leftchildIdx = 2 * idx + 1;
            let rightchildIdx = 2 * idx + 2;
            let swap = null;

            if (leftchildIdx < this.values.length && this.values[leftchildIdx].priority < element.priority) {
                swap = leftchildIdx;
            }
            if (rightchildIdx < this.values.length && (swap == null && this.values[rightchildIdx].priority < element.priority || swap !== null && this.values[rightchildIdx].priority < this.values[leftchildIdx].priority)) {
                swap = rightchildIdx;
            }

            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let pq = new PriorityQueue();
pq.enqueue("reading", 1);
pq.enqueue("eating", 2);
pq.enqueue("playing", 3);
pq.enqueue("dancing", 4);
pq.enqueue("visit", 5);
pq.dequeue();
pq.dequeue();

console.log(pq.values);

