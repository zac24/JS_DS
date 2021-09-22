/**
 * 
 * Sum Of Two LinkedList using Stack 
 * 
 */

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function sumOfTwoLinkedListUsingStack(firstHead, secondHead){
    let firstStack = []
    let secondStack = []
    let resultStack = []

    while(firstHead !== null){
        const val = firstHead.value
        firstStack.push(val)
    }

    while(secondHead !== null){
        const val = secondHead.value
        secondStack.push(val)
    }

    console.log('firstStack size', firstStack.size())
    console.log('secondStack size', secondStack.size())

    return false
}

let firstList = new Node(1)
firstList.next = new Node(2)
firstList.next.next = new Node(3)

console.log('firstList ==>', firstList)

let secondList = new Node(8)
secondList.next = new Node(9)
secondList.next.next = new Node(9)

console.log('secondList ==>', secondList)

sumOfTwoLinkedListUsingStack(firstList, secondList)
