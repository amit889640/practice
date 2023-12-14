// 1:57
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (true) {

            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    break;
                } else {
                    currentNode = currentNode.left;
                    continue;
                }
            }

            if (value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                    continue;
                }
            }
            break;
        }

    }
}

let t = new Tree();

t.insert(4);
t.insert(2);
t.insert(5);
console.log(t);
