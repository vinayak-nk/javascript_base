/*
  FIFO
  use cases
    1. background tasks
    2. printing / task processing
    3. uploading
*/

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  isEmpty = () => this.size === 0

  //Enqueue or push
  insertAtEnd(val) {
    let newNode = new Node(val)
    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.size++;
    return this;
  }

  // Dequeue or shift
  removeFromBegining() {
    let poppoedNode = this.first;
    if(this.isEmpty()) return undefined
    else if (this.size === 1) this.first = this.last = null
    else {
      this.first = poppoedNode.next
      poppoedNode.next = null
    }
    this.size--;
    return poppoedNode
  }
}

let queue = new Queue()

queue.insertAtEnd(1)
queue.insertAtEnd(2)
queue.insertAtEnd(3)

console.log(JSON.stringify(queue))
queue.removeFromBegining()
console.log(JSON.stringify(queue))
queue.removeFromBegining()
console.log(JSON.stringify(queue))
queue.removeFromBegining()
console.log(JSON.stringify(queue))
