/*
  LIFO
  use cases
    1. Managing fn invocations
    2. Undo / Redo
    3. Routing / history
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  isEmpty = () => this.size === 0

  push(val) {
    let newNode = new Node(val)

    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++;
  }

  pop() {
    let poppedNode
    if (this.isEmpty()) return undefined
    else if (this.size === 1) {
      poppedNode = this.first
      this.first = this.last = null
    } else {
      poppedNode = this.last
      let currentNode = this.first
      let prevNode = this.first
      while (currentNode.next !== null) {
        prevNode = currentNode
        currentNode = currentNode.next  
      }
      this.last = prevNode
      this.last.next = null
    }

    this.size--;

    return poppedNode
  }
}


let stack = new Stack()

stack.push(10)
stack.push(20)
stack.push(30)

// console.log(stack)
console.log(JSON.stringify(stack))
stack.pop()
console.log(JSON.stringify(stack))
stack.pop()
console.log(JSON.stringify(stack))
stack.pop()
console.log(JSON.stringify(stack))