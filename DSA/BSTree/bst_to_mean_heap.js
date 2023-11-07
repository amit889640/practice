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

    display() {
        console.log(this.root);
    }

    inOrder(node) {
        let values = [];
        function inOrderTraverse(node) {
            if (node?.left) inOrderTraverse(node.left);
            values.push(node?.value);
            if (node?.right) inOrderTraverse(node.right);
            return values;
        }
        return inOrderTraverse(node);
    }

    preOrder(node) {
        let values = [];
        function preOrderTraverse(node) {
            values.push(node?.value);
            if (node?.left) preOrderTraverse(node.left);
            if (node?.right) preOrderTraverse(node.right);
            return values;
        }
        return preOrderTraverse(node);
    }



    bstToMinHeap() {
        let preOrderValues = this.preOrder(this.root);
        return preOrderValues;

    }
}

let bst = new BSTree()
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
bst.display();
console.log(bst.bstToMinHeap(bst.root));

// bstToMinHeap(node) {

// }

