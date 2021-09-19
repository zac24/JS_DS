/**
 * 
 * How to remove duplicates from a sorted linked list?
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next 
    }
}

function removeDuplicates(head){
    let prev = head
    let current = head

    let result = new Node ()
    let resultHead = result

    while(head !== null){
        if(prev.value === current.value){
            current = current.next
        }else {
            result.next = new Node(prev.value)
            result = result.next
            prev = current
            current = current.next
        }
        head = head.next
    }

    if(head === null){
        result.next = new Node(prev.value)
        result = result.next
    }

    return resultHead.next
}

const head = new Node(1)
head.next = new Node(1)
head.next.next = new Node(2)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(3)

console.log('The removed duplicate ===>', removeDuplicates(head))