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

    displayList() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }

    reverse() {
        let cn = this.head.next;
        let nn = new Node(this.head.val);
        while (cn && cn.val != null) {
            if (!cn.val) continue;
            let tn = new Node(cn.val);
            tn.next = nn;
            nn = tn;
            cn = cn.next;
        }
        return nn;
    }
}


let sl1 = new SinglyLinkedList();
let sl2 = new SinglyLinkedList();
sl1.push(1);
sl1.push(3);
sl1.push(5);
sl1.push(7);
sl2.push(2);
sl2.push(4);
sl2.push(6);
sl2.push(8);


// let head = sl1.reverse();
// console.log(sl1.displayList());
// console.log(sl2.displayList());


