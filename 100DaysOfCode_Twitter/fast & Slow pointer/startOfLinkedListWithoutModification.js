/**
 * 
 * Given the head of a Singly LinkedList that contains a cycle, 
 * write a function to find the starting node of the cycle.
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function startOfLinkedListWithoutModification(head){
    let slow = head 
    let fast = head
    let length = 0
    while(fast !== null && fast.next !== null){
        fast = fast.next.next 
        slow = slow.next
        if(slow === fast){
           length = calculateCycleLength(slow)
           break;
        }
    }
    return findStart(head, length)
}

function calculateCycleLength(slow){
    let currentHead = slow
    let count = 0
    while(true){
        currentHead = currentHead.next
        count += 1
        if(currentHead === slow){
            break;
        }
    }
    return count
}

function findStart(head, length){
    let pointer1 = head
    let pointer2 = head 

    while(length > 0){
        pointer2 = pointer2.next
        length -=1
    }
    while(pointer1 !== pointer2){
        pointer1 = pointer1.next
        pointer2 = pointer2.next 
    }
    return pointer1
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`The start of the LinkedList Cycle`, startOfLinkedListWithoutModification(head).value)

// head.next.next.next.next.next.next = head.next.next.next;
// console.log(`The start of the LinkedList Cycle`, startOfLinkedListCycle(head))