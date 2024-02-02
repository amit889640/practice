
21. Merge Two Sorted Lists
var mergeTwoLists = function (list1, list2) {
    if (!list1 || !list2) return list1 || list2
    if (list1.val < list2.val) {
        return new Node(list1.val, mergeTwoLists(list1.next, list2))
    }
    return new Node(list2.val, mergeTwoLists(list1, list2.next))
};

console.log(mergeTwoLists(sl1.head, sl2.head))
