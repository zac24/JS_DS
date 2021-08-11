/**
 * 
 * How do you find the middle element of a singly linked list in one pass?
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function middleOfLinkedList(head) {
    let slow = head
    let fast = head

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }

    return slow
}


const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log (`The middle of Single Linkedlist ==>`, middleOfLinkedList(head))
