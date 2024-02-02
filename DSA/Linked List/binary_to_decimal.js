// 1290. Convert Binary Number in a Linked List to Integer
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
    let currentNode = head;
    let binaryArr = [];
    while (currentNode && currentNode.val != null) {
        binaryArr.push(currentNode.val);
        currentNode = currentNode.next;
    }

    let total = 0;
    let p = 0;
    for (let i = binaryArr.length - 1; i >= 0; i--) {
        total += Math.pow(2, p) * binaryArr[i];
        p++;
    }
    return total;
};