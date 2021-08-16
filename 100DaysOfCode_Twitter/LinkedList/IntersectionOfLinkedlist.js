/**
 * 
 * How to find the node at which the intersection of two singly linked lists begins.
 * 
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
 * If the two linked lists have no intersection at all, return null.
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

// function getIntersectionNode(headA, headB){
// if(headA === null || headB === null){
//     return null
// }
//     let listA = headA
//     let listB = headB

//     while(listA !== null){
//         listA.visited = true 
//         listA = listA.next
//     }

//     while(listB !== null){
//         if(listB.visited === true){
//             return listB
//         }
//         listB = listB.next  
//     }

//     return null 
// }

function getIntersectionNode (headA, headB){
    if(headA === null || headB === null){
        return null
    }
    let listA = headA
    let listB = headB

    while(listA !== listB){
        listA = listA.next
        listB = listB.next
        
        if(listA === listB){
            return listA
        } 
        if(listA === null){
            listA = headB
        }
        if(listB === null){
            listB = headA
        }
    }
    return listA
}

let list1 = new Node(4)
list1.next = new Node(1)
list1.next.next = new Node(8)
list1.next.next.next = new Node(4)
list1.next.next.next.next = new Node(5)

let list2 = new Node(5)
list2.next = new Node(6)
list2.next.next = list1.next
list2.next.next.next = list1.next.next
list2.next.next.next.next = list1.next.next.next
list2.next.next.next.next.next = list1.next.next.next.next

console.log('Intersection Node of two linkedlist', getIntersectionNode(list1, list2))