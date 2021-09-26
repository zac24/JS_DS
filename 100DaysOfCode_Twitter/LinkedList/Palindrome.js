/**
 * 
 * How to check if a given linked list is a palindrome?
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next 
    }
}


function palindrome(head){
    let stack = []
    let current = head

    while(current !== null){
        stack.push(current.value)
        current = current.next
    }

    while(head !== null){
        const element = stack.pop()

        if(element !== head.value){
            return false
        }else {
            head = head.next
        }
    }

    return true
}

const head = new Node('M')
head.next = new Node('A')
head.next.next = new Node('D')
head.next.next.next = new Node('A')
head.next.next.next.next = new Node('M')

console.log('The given linkedlist is a palindrome ===>', palindrome(head))
