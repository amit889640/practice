class Heap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let ele = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentEle = this.values[parentIdx];
            if (ele >= parentEle) break;
            this.values[parentIdx] = ele;
            this.values[idx] = parentEle;
            idx = parentIdx;
        }
    }

    extractValue() {
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
                if (leftChild < ele) {
                    swap = leftIdx;
                }
            }
            if (this.values.length > rightIdx) {
                if (swap == null && rightChild < ele || swap != null && rightChild < leftChild) {
                    swap = rightIdx;
                }
            }
            if (swap == null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = ele;
            idx = swap;
        }
    }
}


let heap = new Heap();
heap.insert(8);
heap.insert(2);
heap.insert(1);
heap.insert(5);
heap.insert(3);
heap.insert(4);

console.log(heap.extractValue());
console.log(heap.extractValue());
console.log(heap.extractValue());