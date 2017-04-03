/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let iter = 1
    console.log('head: ', head)

    while (head) {
        console.log('val: ', head.val, 'iter: ', iter)

        // if (iter === 1) {

        // }

        // if (iter%2) {
        //     // console.log('iter: ', iter)

        // } else {

        // }
        head.next = head.next.next

        iter ++
        head = head.next
    }

    // console.log('head: ', head)
};
