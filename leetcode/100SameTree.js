/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    while (p) {
        console.log('p: ', p.val)
        p = p.left
    }

    while (q) {
        console.log('q: ', q.val)
        q = q.left
    }
    // console.log('pLength: ', p.length)
    // if (p.length !== q.length) return false

    return true
};
