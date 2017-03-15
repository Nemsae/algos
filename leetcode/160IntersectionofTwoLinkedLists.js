/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let dict = {}
    let flag = true

    while (headA || headB) {
        // console.log('Running')

        if (headA) {
            // console.log('headA:val ', headA.val)
            // console.log('headA:next ', headA.next)

            if (dict[headA.val] === 'B') {
                // console.log('B match found!')
                return headA
            } else {
                dict[headA.val] = 'A'
                headA = headA && headA.next
            }
            // console.log('headA: ', headA, 'dict: ', dict)
        }

        if (headB) {
            if (dict[headB.val] === 'A') {
                // console.log('A match found!')
                return headB
            } else {
                // console.log('headB.val: ', headB.val)
                dict[headB.val] = 'B'
                headB = headB.next
            }
            // console.log('headB: ', headB, 'dict: ', dict)
        }
    }

    if (flag) return null
};
