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
            if (ele > parentEle) break;
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
    getLength() {
        return this.values.length;
    }
}



function solution(arr, pos) {
    let heap = new Heap();
    for (let i = 0; i < arr.length; i++) {
        heap.insert(arr[i]);
        if (heap.getLength() > pos) {
            heap.extractValue();
        }

    }
    return heap.extractValue();
}

// function pushInHeap(arr, heap) {
//     for (let i = 0; i < arr.length; i++) {
//         heap.insert(arr[i]);
//     }
// }


console.log(solution([3, 2, 1, 5, 6, 4], 2));
