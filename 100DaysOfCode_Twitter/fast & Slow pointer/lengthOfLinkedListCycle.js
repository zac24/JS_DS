/**
 * 
 * Given the head of a LinkedList with a cycle, find the length of the cycle.
 * 
 */


class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next
    }
}


function lengthOfLinkedListCycle(head){
    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return lengthOfCycle(slow)
        }
    }
    return 0
}

function lengthOfCycle(slow){
    let current = slow
    let count = 0
    while(true){
        current = current.next
        count += 1
        if(current === slow){
            break;
        }
    }
    return count
}


const head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`The Linkedlist has cycle`, lengthOfLinkedListCycle(head))

head.next.next.next.next.next.next = head.next.next;
console.log(`The Linkedlist has cycle`, lengthOfLinkedListCycle(head))

head.next.next.next.next.next.next = head.next.next.next;
console.log(`The Linkedlist has cycle`, lengthOfLinkedListCycle(head))