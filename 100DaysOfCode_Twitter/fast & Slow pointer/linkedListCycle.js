/**
 * 
 * Given the head of a Singly LinkedList, 
 * write a function to determine if the LinkedList has a cycle in it or not.
 * 
 */

class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next
    }
}   

function hasCycle(head){
    let slow = head 
    let fast = head

    while(fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            return true
        }
    }
    return false
}

/**
 * 
Another way: 
funtion checkHasCycle(head){
    while(head){
        if(head.visited){return true}
        head.visited = true
        head = head.next
    }
    return false
}
 * 
 */

head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
console.log(`The Linkedlist has cycle`, hasCycle(head))

head.next.next.next.next.next.next = head.next.next;
console.log(`The Linkedlist has cycle`, hasCycle(head))

head.next.next.next.next.next.next = head.next.next.next;
console.log(`The Linkedlist has cycle`, hasCycle(head))



