// head - first node
// tail - last node
// length - no. of nodes


class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  isEmpty() {
    if (this.length === 0) return true
    return false
  }
  push(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++;
    return this
  }

  //remove node at the end of the list
  pop() {
    if (this.isEmpty()) return undefined // No nodes present // (!this.head) //(!this.tail)

    let current = this.head
    let newTail = this.head

    // Iterate till current reaches tail
    while(current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--;
    
    // if list had only one element, after popping, list becomes zero
    if (this.isEmpty()) this.head = this.tail = null

    return current
  }

  //remove node from begining of the list and return node
  shift() {
    if (this.isEmpty()) return undefined
    
    let currentHead = this.head
    if (this.length === 1) this.head = this.tail = null
    else this.head = currentHead.next
    
    this.length--;
    return currentHead
  }

  //Add node at begining of the list
  unshift(val) {
    let newNode = new Node(val)

    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++;
    return this;
  }

  // Get element at the index.
  get(index) {
    if (this.isEmpty() || index >= this.length) return null

    let counter = 0
    let currentNode = this.head
    while (counter < index) {
      counter++;
      currentNode = currentNode.next
    }
    return currentNode
  }

  //Set value at the index received
  set(value, index) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = value
      return true
    } else return false
  }

  // insert new value at the specified index
  insertAtIndex(val, index) {
    if (this.length < 0 || index > this.length) return false
    else if (index === this.length) !!this.push(val)
    else if (index === 0) !!this.unshift(val)
    else {
      let prevNode = this.get(index - 1)
      let nextNode = prevNode.next
      let newNode = new Node(val)

      prevNode.next = newNode
      newNode.next = nextNode

      this.length++;
      return true;
    }
  }

  removeAtIndex(index) {
    if (this.isEmpty() || index >= this.length) {
      return false
    }
    else if (index === 0) return this.shift(index)
    else if (index === this.length - 1) return this.pop()
    else {
      let prevNode = this.get(index-1)
      let currentNode = prevNode.next
      
      prevNode.next = currentNode.next
      this.length--;
      return currentNode;
    }
  }

  reverse() {
    let currentNode = this.head
    let nextNode = null
    let prevNode = null
    this.head = this.tail
    this.tail = currentNode

    while(currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
   }
    return this
  }
}

var list = new SingleLinkedList('2')
list.push(2)
list.push(4)
// list.push(6)
console.log(JSON.stringify(list.length))
let poppedEle = list.pop()
console.log(JSON.stringify(list.length))
poppedEle = list.shift()
console.log(JSON.stringify(list.length))
list.unshift(8)
console.log(JSON.stringify(list.length))
list.push(10)
// console.log(JSON.stringify(list.get(1)))
console.log(JSON.stringify(list))
list.set(20, 1)
console.log(JSON.stringify(list))
list.insertAtIndex(30, 1)
console.log(JSON.stringify(list))
list.insertAtIndex(40, 0)
console.log(JSON.stringify(list))
list.insertAtIndex(50, 1)
console.log(JSON.stringify(list))
list.removeAtIndex(list.length)
console.log(JSON.stringify(list))
list.reverse()
console.log(JSON.stringify(list))