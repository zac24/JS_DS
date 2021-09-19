/**
 * 
 * Given a linked list and a value x, 
 * partition it such that all nodes less than x come before nodes greater than or equal to x
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function partitionLinkedList(head, x){
    let before = new Node()
    let beforeHead = before
    let after = new Node()
    let afterHead = after

    let current = head 

    while(current !== null){
        if(current.value < x){
            before.next = new Node(current.value)
            before = before.next
            current = current.next
        }else {
            after.next = new Node(current.value)
            after = after.next
            current = current.next
        }
    }

   if(before.next === null){
        before.next = afterHead.next
   }  
    return beforeHead.next
}

const head = new Node(1)
head.next = new Node(4)
head.next.next = new Node(3)
head.next.next.next = new Node(2)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(2)

console.log(`The linkedlist after partition transformation===>`, partitionLinkedList(head, 3))