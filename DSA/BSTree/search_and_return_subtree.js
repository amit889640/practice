class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (current.value == val) return undefined;
            if (val < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }
            if (val > current.value) {
                if (current.right == null) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
    findAndReturnSubChild(val) {
        let node = this.getNode(val);
        let subChildren = this.getAllSubChildren(node);
        return subChildren;
    }

    getAllSubChildren(node) {
        let children = [];
        function traverse(node) {
            children.push(node?.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(node);
        return children;
    }

    getNode(val) {
        let current = this.root;
        while (true) {
            if (current.value == val) {
                return current;
            }
            if (val < current.value) {
                current = current.left;
            }
            if (val > current.value) {
                current = current.right;
            }
        }
    }
}


let bst = new Tree();

function insertInTree(arr) {
    for (const e of arr) {
        bst.insert(e);
    }
}

insertInTree([4, 2, 7, 1, 3]);
// console.log(bst);

console.log(bst.findAndReturnSubChild(2));


