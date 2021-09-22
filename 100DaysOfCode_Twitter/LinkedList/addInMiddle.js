/**
 * 
 * How to add an element in the middle of the linked list?
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function addElementInMiddleOfList(head, element){
    let slow = head 
    let fast = head

    while(fast !== null && fast.next !== null){
        fast = fast.next.next
        slow = slow.next
    }

    let firstNodeOfSecondPart = slow.next
    slow.next = element
    element.next = firstNodeOfSecondPart

    return head
}


const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
// head.next.next.next = new Node(4)
// head.next.next.next.next = new Node(5)

const element = new Node(6)

console.log('The new LinkedList:', addElementInMiddleOfList(head, element))