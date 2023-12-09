class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;

        }
        let current = this.head;
        let prev = this.head;
        while (current?.next?.next) {
            prev = current.next;
            current = current.next;
        }
        this.length--;
        this.tail = prev;
        this.tail.next = null;
    }

    displayList() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    shift() {
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }
        this.head = this.head.next;
        this.length--;
    }

    unShift(val) {
        let newNode = new Node(val);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    getNode(index) {
        if (index < 0 || index === this.length) {
            return null;
        }
        let count = 0;
        let current = this.head;
        while (index != count) {
            current = current.next;
            count++;
        }
        return current;
    }

    setNode(index, val) {
        if (index < 0 || index > this.length) {
            return null;
        }
        let current = this.head;
        let count = 0;
        while (count != index) {
            current = current.next;
            count++;
        }
        current.val = val;
    }

    insertAtPos(val, index) {
        let newNode = new Node(val);

        if (index == 0) {
            return this.unShift(val);
        }


        if (index == this.length) {
            return this.push(val);
        }

        let node = this.getNode(index - 1);
        newNode.next = node.next;
        node.next = newNode;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

let sll = new SinglyLinkedList();
sll.push(11);
sll.push(22);
sll.push(33);
sll.push(44);
sll.push(55);
sll.push(66);


console.log(sll.insertAtPos("Amit", 3));
sll.displayList();


