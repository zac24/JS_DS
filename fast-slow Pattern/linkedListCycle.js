/**
 * 
 * Title : LinkedList Cycle
 * 
 * Problem Statement #
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
 * 
 * 
 */

class Node {
    constructor(value, next=null){
        this.value = value
        this.next = next 
    }
}

const has_cycle = function(head) {
    let slow = head
    let fast = head
    if(fast != null && fast.next != null){
        fast = fast.next.next 
        slow = slow.next
        if(slow === fast) {
            return true
        }
    }
    return false
}

var head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log('The LinkedList has cycle', has_cycle(head))

head.next.next.next.next.next.next = head.next.next
console.log('The LinkedList has cycle', has_cycle(head))

head.next.next.next.next.next.next.next = head.next.next.next
console.log('The LinkedList has cycle', has_cycle(head))
