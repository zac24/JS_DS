/**
 * 
 * Merge two sorted linked lists and return it as a sorted list. 
 * The list should be made by splicing together the nodes of the first two lists.
 * 
 */

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function mergeSortedList(list1, list2){
    let result = new Node()
    let head = result

    while(list1 !== null && list2 !== null){
        if(list1.value < list2.value){
            result.next = new Node(list1.value)
            list1 = list1.next
        }else{
            result.next = new Node(list2.value)
            list2 = list2.next
        }
        result = result.next
    }

    if(list1 !== null){
        result.next = list1
    }
    if(list2 !== null){
        result.next = list2
    }

    return head.next
}

let list1 = new Node(1)
list1.next = new Node(2)
list1.next.next = new Node(4)

let list2 = new Node(1)
list2.next = new Node(3)
list2.next.next = new Node(4)

console.log('The result of merging two sorted linkedlist ==>', mergeSortedList(list1, list2))