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

    displayList(head) {
        let current = head;
        while (current) {

            console.log(current.val);
            current = current.next;
        }
    }

    reverse(head) {
        let curr = head;
        let next = null;
        let prev = null;
        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        head = prev;
        return head;
    }
}


let sl1 = new SinglyLinkedList();
sl1.push(1);
sl1.push(2);
sl1.push(3);
sl1.push(4);

console.log(sl1.displayList(sl1.head));
let head = sl1.reverse(sl1.head);
console.log(head);


