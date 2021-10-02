
class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function reverseUsingRecursion(prev, head){

    if(head === null){
        return prev
    }

    let current = head 
    let next = current.next
    current.next = prev
    prev = current
    current = next

    return reverseUsingRecursion(prev, current)
  
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log('1 -> 2 -> 3 -> 4 -> 5')

console.log('The reverse of LinkedList using recursion   =====>', reverseUsingRecursion(null, head))