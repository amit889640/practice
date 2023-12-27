// 0211
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BSTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (val < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    break;
                }
                else {
                    current = current.left;
                }
            }
            if (val > current.value) {
                if (current.right == null) {
                    current.right = newNode;
                    break;
                } else {
                    current = current.right;
                }
            }
        }
        return this.root;
    }

    getRoot() {
        return this.root;
    }



    insertLevelOrderWithRecursion(arr, i) {
        // base case for recursion
        let root = new BSTree();
        if (i < arr.length) {
            root = new Node(arr[i]);
            root.left = this.insertLevelOrder(arr, 2 * i + 1);
            root.right = this.insertLevelOrder(arr, 2 * i + 2);
        }
        return root;
    }


    insertLevelOrder(arr) {
        let i = 1;
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
}

function dfsMerge(root1, root2, root3) {
    if (!root1) {
        return root2;
    } else if (!root2) {
        return root1;
    } else {
        root1.value += root2.value;
        root1.left = dfsMerge(root1.left, root2.left);
        root1.right = dfsMerge(root1.right, root2.right);
        return root1;
    }
}


function insertLevelOrder(arr) {
    let i = 1;
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



// let newTree = bst1.dfsMerge(bst1.getRoot(), bst2.getRoot(), bst3.getRoot());

let root1 = insertLevelOrder([1, 3, 2, 5])
let root2 = insertLevelOrder([2, 1, 3, null, 4, null, 7])
console.log(dfsMerge(root1, root2));