/**
 * 
 * How do you find the third node from the end in a singly linked list?
 * Similarlly Nth Node can also be found. 
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function thirdLastNode(head) {
    let slow = head
    let fast = head
    let length = 1

    while(fast !== null && fast.next !== null){
        fast = fast.next 
        length += 1
        
        if(length > 3){
            slow = slow.next
        }
    }

    return slow.value
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log('1 -> 2 -> 3 -> 4 -> 5')
console.log ('The third node from the end of linkedList ===>', thirdLastNode(head))

