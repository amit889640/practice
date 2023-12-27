// Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
// Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
1948
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}


function insertLevelOrder(arr) {
    let i = 0;
    let rootNode = new Node(arr[0]);
    let queue = [rootNode];
    while (i < arr.length) {
        let currNode = queue.shift();
        if (i < arr.length) {
            let leftNode = new Node(arr[i++]);
            currNode.left = leftNode;
            queue.push(leftNode);
        }
        if (i < arr.length) {
            let rightNode = new Node(arr[i++]);
            currNode.right = rightNode;
            queue.push(rightNode)
        }
    }
    return rootNode;
}

let root1 = insertLevelOrder([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9])
console.log(root1);