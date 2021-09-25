/**
 * 
 * How do you sort a linked list??
 * 
 */


class Node {
    constructor(value, next = null){
        this.value = value 
        this.next = next
    }
}

function sotLinkedList(head){
    let tempArr = []
    let current = head
    let sorted = head
    while(current !== null){
        tempArr.push(current.value)
        current = current.next
    }

    tempArr.sort()

    for (let index = 0; index < tempArr.length; index++) {
        const element = tempArr[index];
        sorted.value = element
        sorted = sorted.next
    }
    
    return head
    
}


const head = new Node(5)
head.next = new Node(3)
head.next.next = new Node(1)
head.next.next.next = new Node(2)
head.next.next.next.next = new Node(4)

console.log('The sorted linkedlist is====>', sotLinkedList(head))
