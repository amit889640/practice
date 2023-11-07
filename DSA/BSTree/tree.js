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
            if (val === current.value) return undefined;
            if (val < current.value) {
                if (!current?.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            if (val > current.value) {
                if (!current?.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }

    }

    find(val) {
        let current = this.root;
        while (true) {
            if (!current) {
                return false;
            }
            if (current.value == val) {
                return true;
            }
            if (val < current.value) {
                current = current.left;
            }
            if (val > current.value) {
                current = current.right;
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    bFS() {
        let rootNode = this.root;
        let queue = [];
        let nodes = [];
        queue.push(rootNode);

        while (queue.length) {
            let node = queue.shift();
            nodes.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return nodes;
    }

    dFSPreOrder() {
        let nodes = [];
        function traverse(node) {
            nodes.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return nodes;
    }

    dFSInOrder() {
        let nodes = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            nodes.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return nodes;
    }
    dFSPostOrder() {
        let nodes = [];
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            nodes.push(node.value);
        }
        traverse(this.root);
        return nodes;
    }

    bstToMinHeap() {
        // First get inorder of the tree and then convert it into the preorder it will become min heap.
        let inOrderValues = this.dFSInOrder(this.root);
        let nodes = [];
        let i = -1;
        function traverse(node) {
            node.value = inOrderValues[++i];
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
    }

    display() {
        console.log(this.root);
    }
}

let bst = new BSTree()
// bst.insert(10);
// bst.insert(6);
// bst.insert(15);
// bst.insert(3);
// bst.insert(8);
// bst.insert(20);



bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
bst.bstToMinHeap();
bst.display()


// console.log(`BFS:- ${bst.bFS()}`);
// console.log(`DFSPreOrder:- ${bst.dFSPreOrder()}`);
console.log(`DFSInOrder:- ${bst.dFSInOrder()}`);
// console.log(`DFSPostOrder:- ${bst.dFSPostOrder()}`);