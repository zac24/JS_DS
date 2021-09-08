/**
 * 
 * Given the head of a Singly LinkedList that contains a cycle, 
 * write a function to find the starting node of the cycle.
 * 
 */

// with modifying LinkedList

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function startOfLinkedListCycle(head) {
    while(head !== null){
        if(head.visited){
            return head
        }
        head.visited = true
        head = head.next
    }
    return null
}

const head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`The start of the LinkedList Cycle`, startOfLinkedListCycle(head))

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`The start of the LinkedList Cycle`, startOfLinkedListCycle(head))