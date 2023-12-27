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

    rangeSumBst(root, low, high) {
        let sum = 0;
        function traverse(current) {
            if (current.value >= low && current.value <= high) {
                sum += current.value;
            }
            if (current.left) traverse(current.left);
            if (current.right) traverse(current.right);
        }
        traverse(root);
        return sum;
    }

}

let bst = new BSTree();
// bst.insert(10);

function rangeSumBST(arr) {
    insertInTree(arr);
    let sum = bst.rangeSumBst(bst.root, 7, 15);
    console.log(sum);
}

function insertInTree(arr) {
    for (const e of arr) {
        bst.insert(e);
    }
}

rangeSumBST([10, 5, 15, 3, 7, null, 18]);

