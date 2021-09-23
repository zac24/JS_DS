/**
 * 
 * Convert Sorted List to Binary Search Tree
 * 
 * Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class ListNode{
    constructor(value, next) {
    this.value = (value === undefined ? 0 : value)
    this.next = (next === undefined ? null : next)
    }
    
}

class TreeNode{
    constructor(value, left, right) {
    this.value = (value === undefined ? 0 : value)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    }
}

function sortedListToBST(head){
    console.log('The value of head ===>', head)
    if(!head){
        return null
    }

    if(!head.next){
        return new TreeNode(head.value)
    }

    let middle = head
    let left = head
    let right = head

    while(right !== null && right.next !== null){
        right = right.next.next
        left = middle
        middle = middle.next
    }

    left.next = null

    let treeNode = new TreeNode(middle.value)
    treeNode.left = sortedListToBST(head)
    treeNode.right = sortedListToBST(middle.next)

    return treeNode
}

const head = new ListNode(-10)
head.next = new ListNode(-3)
head.next.next = new ListNode(0)
head.next.next.next = new ListNode(5)
head.next.next.next.next = new ListNode(9)
console.log('The sorted list to BST ===>', sortedListToBST(head))