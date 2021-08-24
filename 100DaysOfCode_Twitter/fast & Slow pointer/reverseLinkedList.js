/**
 * 
 * Reverse the given List
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next 
    }
}

function reverseLinkedList(head){
    let prev = null 
    while(head !== null){
        let next = head.next
        head.next = prev
        prev = head
        head = next
    }
    return prev
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)


console.log(`The reverse LinkedList`, reverseLinkedList(head))