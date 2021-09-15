/**
 * creation of Queue
 *
 */

// class Queue {
//     constructor()
// }

// Slight Complex but Efficient way to do this. 

function Queue() {
    this.queue = {}
    this.tail = 0
    this.head = 0
}

Queue.prototype.enqueue = function (element){
    this.queue[this.tail++] = element
}

Queue.prototype.dequeue = function(){
    if(this.tail === this.head){
        return undefined
    }

    var element = this.queue[this.head]
    delete this.element[this.head++]
    return element
}

// Another simpel way but more Costly 


const enqueue = (element) => queue.push(element)

const dequeue = () => queue.shift()