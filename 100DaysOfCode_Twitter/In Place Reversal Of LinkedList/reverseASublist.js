/**
 * 
 * Reverse a Sub-list 
 * 
 * Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.
 *
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next 
    }
}

function reverseASubList(head, p, q){
    if(p === q){
        return head
    }

    let i = 0
    let current = head
    let previous = null

    while(current !== null && i < p - 1){
        previous = current
        current = current.next
        i += 1
    }

    let lastNodeOfFirstPart = previous
    let lastNodeOfSublist = current

    let next = null 
    i = 0 

    while(current !== null && i < q-p+1){
        next = current.next
        current.next = previous
        previous = current
        current = next

        i += 1
    }

    if(lastNodeOfFirstPart !== null){
        lastNodeOfFirstPart.next = previous
    }else {
        head = previous
    }
    
    lastNodeOfSublist.next = current
    return head
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log('Original Linkedlist:', head)
console.log(`the reverse of link from point p(2) & q(4) will be:`, reverseASubList(head, 2, 4))
