/**
 * 
 * Reverse a LinkedList
 * 
 * Given the head of a Singly LinkedList, reverse the LinkedList. 
 * Write a function to return the new head of the reversed LinkedList.
 * 
 *
 */

function reverseALinkedList (head) {
    let prev = null 

    while(head !== null && head.next !== null){
        let next = head.next 
        head.next = prev
        prev = head
        head = next 
    }
}