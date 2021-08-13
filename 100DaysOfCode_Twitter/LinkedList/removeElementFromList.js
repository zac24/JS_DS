/***
 * 
 * Remove Linked List Elements
 * 
 * Given the head of a linked list and an integer val, 
 * remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function removeElements(head, element){
    if(!head) return head
    let current = head
    let prev = head
    while(current !== null){

        if(head.value === element){
            head = head.next
            current = head
        }else if(current.value === element){
            prev.next = current.next
            current = current.next
        }else {
            prev = current
            current = current.next
        }
    }
    return head
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

let x = 3

console.log('The removed element from LinkedList', removeElements(head, x))

