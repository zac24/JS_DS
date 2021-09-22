/**
 *
 * How do you check if a given linked list contains a cycle?
 *  
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function isCycleExist(head){
    let slow = head
    let fast = head

    while (fast !== null){
        fast = fast.next.next
        slow = slow.next

        if(fast === slow){
            return true
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

console.log (`is the Single Linkedlist contains Cycle ==>`, isCycleExist(head))