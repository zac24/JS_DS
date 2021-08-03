/**
 * 
 * How do you find the starting node of the cycle?
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function startOfCycleLinkedlist(head){
    let slow = head

    while(slow !== null ){
        slow.visited = true
        slow = slow.next

        if(slow.visited){
            return slow.value
        }
    }
    return false
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = head.next.next

console.log ('The start of the cycle is', startOfCycleLinkedlist(head))


