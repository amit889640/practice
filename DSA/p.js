class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return this;
    }

    pop() {
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }

        let current = this.head;
        let prev = null;
        while (current.next.next) {
            prev = current;
            current = current.next;
        }

        prev.next.next = null;
        this.tail = prev;
        console.log(prev);
        this.length--;
    }



    display() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
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

let ll = new LinkedList();

ll.push(2);
ll.push(3);
ll.push(4);
ll.push(6);
// ll.pop();
ll.reverse();
ll.display();



