/**
 * 
 * Reverse every K Element Sublist 
 * 
 * Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
 * If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.
 * 
 */

class Node {
    constructor (value, next = null){
        this.value = value
        this.next = next
    }
}

function printList(head) {
    let temp = this
    while(temp !== null){
        process.stdout.write(`${temp.value}`)
        temp = temp.next
    }
}

function reverseKElementSublist(head, k){
    if(k === 0 || k === 1){
        return head
    }

    let current = head 
    let previous = null
    
    while(true){
        let lastNodeOfPreviousPart = previous
        let lastNodeOfSublist = current

        let i = 0
        let next = null 
        while(current !== null && i < k){
            next = current.next
            current.next = previous
            previous = current
            current = next
            i += 1
        }

        if(lastNodeOfPreviousPart !== null){
            lastNodeOfPreviousPart = previous
        }else {
            head = previous
        }

        lastNodeOfSublist.next = current

        if(current === null){
            break; 
        }

        previous = lastNodeOfSublist 
    }

    return head

}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log('The reverse after every K element is:', reverseKElementSublist(head, 3))

