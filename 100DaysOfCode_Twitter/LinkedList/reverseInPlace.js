/**
 * 
 * 
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function reverseInPlace(head){
    let current = head 
    let previous = null 

    while(current !== null){
        let next = current.next 
        current.next = previous
        previous = current
        current = next
    }

    return previous
} 

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)


console.log('The String reversed in place', reverseInPlace(head))
