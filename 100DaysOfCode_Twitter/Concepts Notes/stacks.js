/**
 * 
 * A stack is a data structure that has way more limitations, compared to arrays.
 * 
 * We can add items to a stack only by adding them on top. And we can only remove the item on top of the stack.
 * 
 * Think about it like a pile of books. You can only add books on top, and you can only remove the book on top.
 * 
 * So if you add a bunch of books and then you want to access the first book you added, you first need to remove all the books, until you reach the one you added.
 * 
 * This concept is called First In, Last Out (FILO)
 * 
 * While arrays in JavaScript are built-in, and we don’t need to build them, we must implement stacks.
 * 
 * 
 * 
 class Stack {
  #items = []
  push = (element) => this.#items.push(element)
  pop = () => this.#items.pop()
  isempty = () => this.#items.length === 0
  empty = () => (this.#items.length = 0)
  size = () => this.#items.length
}
 * 
We have 5 public methods: push and pop to add/remove from the stack, isempty to check if the stack is empty, 
empty to empty the stack, size to get the stack size.

We can now create a stack object from the class, and work with it:

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.size()) //3
console.log(stack.pop()) //[ 3 ]
console.log(stack.size()) //2


Everything would work in the same way with a public property:

class Stack {
  items = []
  push = (element) => this.items.push(element)
  pop = () => this.items.pop()
  isempty = () => this.items.length === 0
  empty = () => (this.items.length = 0)
  size = () => this.items.length
}

except now we can inspect items from the outside:

const stack = new Stack()
stack.push(2)
console.log(stack.items) //[ 2 ]
while with private class properties, accessing stack.items would return undefined.

 */