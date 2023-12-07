class Node {
    constructor(val) {
        this.val = val;
        this.next = null
        this.prev = null
    }
}

class Ddl {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    createNode(val) {
        let newNode = new Node(val);
        return newNode;
    }

    push(val) {
        let newNode = this.createNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (this.length < 0) return;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
    }

    shift() {
        if (!this.head) return;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            return;
        }
        this.head = this.head.next;
        this.length--;

    }
    display() {
        let currentNode = this.head;
        while (currentNode != null) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
}

let ddl = new Ddl();
ddl.push(11);
ddl.push(22);
ddl.push(33);
ddl.pop();
// ddl.shift();
// ddl.push(44);

ddl.display();