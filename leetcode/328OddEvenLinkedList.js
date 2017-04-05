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
    // console.log('head: ', head)
    let odd = head
    let even = head.next

    while (odd && odd.next) {
        console.log('val: ', odd.val)

        odd.next = odd.next.next

        // console.log('next: ', head.next)
        if (odd.next)
            odd = odd.next
    }

    console.log('even: ', even)
    console.log('odd: ', odd)
    console.log('head: ', head)

    // if (odd) {
    //     odd.next = even
    //     return head
    // }
    // return (odd.next = even)

};
