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

// ============== Reverse the entire Linkedlist =========================

// function palindrome(head){

//     if(!head) return head

//     let current = head
//     let listToBeReversed = head
//     let reverseLinkedlist = reverse(listToBeReversed)

//     while(current !== null){
//         if(current.value !== reverseLinkedlist.value){
//             return false 
//         }else {
//             current = current.next
//             reverseLinkedlist = reverseLinkedlist.next
//         }
//     }

//     return true

// }

// function reverse(list){
//     let prev = null
//     let current = list

//     while(current !== null){
//         let next = current.next
//         current.next = prev
//         prev = current
//         current = next
//     } 

//     return prev
// }

// ======== using Stack ==========================

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

// ==================================

const head = new Node('M')
head.next = new Node('A')
head.next.next = new Node('D')
head.next.next.next = new Node('A')
head.next.next.next.next = new Node('M')

console.log('The given linkedlist is a palindrome ===>', palindrome(head))
